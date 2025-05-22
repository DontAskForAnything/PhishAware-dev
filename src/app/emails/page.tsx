"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";
import { Mail, Eye, Send, Calendar, Info, AlertTriangle } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const templates = [
  "apple",
  "welcome",
  "instagram",
  "google_1_eng",
  "outlook",
  "trap",
  "trap_2",
  "argue",
  "netflix",
];

// Match database schema
interface EmailTrackingRecord {
  id: number;
  message_id: string;
  event_type: string;
  email: string | null;
  template_name: string | null;
  ip_address: string | null;
  user_agent: string | null;
  target_url: string | null;
  timestamp: string;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: any | null;
}

interface AttackLog {
  id: number;
  timestamp: string;
  event_type: string;
  email?: string;
  ip_address?: string;
  user_agent?: string;
  target_url?: string;
}

interface Attack {
  id: string; // Using message_id as id
  message_id: string;
  template_name: string;
  status: string; // e.g., "Sent", "Opened", "Clicked"
  logs: AttackLog[];
  email?: string; // Target email address
}

// Helper function to get event icon
const getEventIcon = (eventType: string) => {
  const type = eventType.toLowerCase();
  switch (type) {
    case "sent":
      return <Send className="w-5 h-5" />;
    case "opened":
      return <Eye className="w-5 h-5" />;
    case "clicked":
      return <AlertTriangle className="w-5 h-5" />;
    default:
      return <Info className="w-5 h-5" />;
  }
};

// Helper to get timeline step colors
const getTimelineStepColors = (eventType: string) => {
  const type = eventType.toLowerCase();
  switch (type) {
    case "sent":
      return {
        line: "bg-blue-500",
        icon: "bg-blue-200 text-blue-700",
        box: "bg-blue-50 border border-blue-200",
      };
    case "opened":
      return {
        line: "bg-yellow-500",
        icon: "bg-yellow-200 text-yellow-700",
        box: "bg-yellow-50 border border-yellow-200",
      };
    case "clicked":
      return {
        line: "bg-red-500",
        icon: "bg-red-200 text-red-700",
        box: "bg-red-50 border border-red-200",
      };
    default:
      return {
        line: "bg-gray-500",
        icon: "bg-gray-200 text-gray-700",
        box: "bg-gray-50 border border-gray-200",
      };
  }
};

export default function EmailsPage() {
  const [attacks, setAttacks] = useState<Attack[]>([]);
  const [selectedAttack, setSelectedAttack] = useState<Attack | null>(null);
  const [stats, setStats] = useState({
    opened: 0,
    clicked: 0,
    sentTotal: 0,
    mostPopularTemplate: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [email, setEmail] = useState("misiujasina+pa@gmail.com");
  const [name, setName] = useState("Michał Jasiński");
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [target_url, setTargetUrl] = useState("https://google.com");

  // Fetch data from Supabase
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("email_tracking")
        .select("*")
        .order("timestamp", { ascending: false });

      if (error) throw error;

      if (!data || data.length === 0) {
        setAttacks([]);
        setLoading(false);
        return;
      }

      // Group records by message_id
      const recordsByMessageId: Record<string, EmailTrackingRecord[]> = {};
      data.forEach((record: EmailTrackingRecord) => {
        if (!recordsByMessageId[record.message_id]) {
          recordsByMessageId[record.message_id] = [];
        }
        recordsByMessageId[record.message_id].push(record);
      });

      // Process each group into an Attack object
      const processedAttacks: Attack[] = Object.keys(recordsByMessageId).map(
        (messageId) => {
          const logs = recordsByMessageId[messageId];
          logs.sort(
            (a, b) =>
              new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
          );

          // Find the "Sent" event to get email and template
          const sentEvent = logs.find((log) => log.event_type === "Sent");

          // Extract the template name - look for it in any event if not in Sent
          let templateName = "Unknown";
          for (const log of logs) {
            if (log.template_name) {
              templateName = log.template_name;
              break;
            }
          }

          // If we found a template in metadata, use it
          if (
            sentEvent?.metadata &&
            typeof sentEvent.metadata === "object" &&
            sentEvent.metadata !== null
          ) {
            const metadata = sentEvent.metadata;
            if ("template_name" in metadata && metadata.template_name) {
              templateName = metadata.template_name as string;
            }
          }

          // Determine status based on latest event
          const hasClicked = logs.some(
            (log) =>
              log.event_type === "Clicked" || log.event_type === "clicked",
          );
          const hasOpened = logs.some(
            (log) => log.event_type === "Opened" || log.event_type === "opened",
          );
          const status = hasClicked ? "Clicked" : hasOpened ? "Opened" : "Sent";

          // Map to AttackLog interface
          const processedLogs: AttackLog[] = logs.map((log) => ({
            id: log.id,
            timestamp: log.timestamp,
            event_type: log.event_type
              ? log.event_type.charAt(0).toUpperCase() + log.event_type.slice(1)
              : "Unknown",
            email: log.email || undefined,
            ip_address: log.ip_address || undefined,
            user_agent: log.user_agent || undefined,
            target_url: log.target_url || undefined,
          }));

          return {
            id: messageId,
            message_id: messageId,
            template_name: templateName,
            status,
            logs: processedLogs,
            email: sentEvent?.email || undefined,
          };
        },
      );

      setAttacks(processedAttacks);

      // Calculate stats
      let openedCount = 0;
      let clickedCount = 0;
      const templateCounts: Record<string, number> = {};

      processedAttacks.forEach((attack) => {
        if (attack.status === "Opened" || attack.status === "Clicked") {
          openedCount++;
        }
        if (attack.status === "Clicked") {
          clickedCount++;
        }

        templateCounts[attack.template_name] =
          (templateCounts[attack.template_name] || 0) + 1;
      });

      const templatesArray = Object.entries(templateCounts);
      const mostPopular =
        templatesArray.length > 0
          ? templatesArray.sort((a, b) => b[1] - a[1])[0][0]
          : "N/A";

      setStats({
        opened: openedCount,
        clicked: clickedCount,
        sentTotal: processedAttacks.length,
        mostPopularTemplate: mostPopular,
      });
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error fetching email tracking data:", error);
      setError(error.message || "Failed to fetch email tracking data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAttackClick = (attack: Attack) => {
    setSelectedAttack(attack);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://malastacja.synology.me:3333/api/send-email",
        {
          template_name: selectedTemplate,
          target_email: email,
          template_vars: {
            name: name,
            url: target_url,
          },
        },
        {
          timeout: 60000,
        },
      );

      if (response.status === 200) {
        toast.success("Email sent successfully!");
        setEmail("misiujasna+pa@gmail.com");
        setName("Michał Jasiński");
        setTargetUrl("https://google.com");
        fetchData();
      }
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        console.error("Server error:", error.response.data);
        toast.error(
          "Failed to send email: " +
            (error.response.data.message || "Unknown error"),
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
        toast.error("No response from server.");
      } else {
        console.error("Request setup error:", error.message);
        toast.error("Error setting up request: " + error.message);
      }
    }
  };

  return (
    <div className=" px-6 pb-6  gap-1 flex flex-col">
      <Toaster
        toastOptions={{
          error: {
            style: {
              background: "#548880",
              color: "white",
            },
          },
          success: {
            style: {
              background: "#548880",
              color: "white",
            },
          },
        }}
      />
      <h1 className="text-7xl font-bold mb-8">Phishing</h1>
      {/* Main content area */}
      <div className="flex flex-1 items-center justify-between gap-6 flex-1 h-[150px] justify-center ">
        <div className="  bg-[#D9D9D9]  p-6 flex-1 h-fu  gap-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-4xl bg-[url(/bg-sign-3.png)]  bg-cover bg-no-repeat  bg-left">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="stat bg-blue-50 rounded-xl p-3">
              <div className="stat-title text-blue-700">Total Sent</div>
              <div className="stat-value text-blue-700">{stats.sentTotal}</div>
            </div>
            <div className="stat bg-yellow-50 rounded-xl p-3">
              <div className="stat-title text-yellow-700">Opened</div>
              <div className="stat-value text-yellow-700">{stats.opened}</div>
              <div className="stat-desc text-yellow-700">
                {stats.sentTotal > 0
                  ? Math.round((stats.opened / stats.sentTotal) * 100)
                  : 0}
                % open rate
              </div>
            </div>
            <div className="stat bg-red-50 rounded-xl p-3">
              <div className="stat-title text-red-700">Clicked</div>
              <div className="stat-value text-red-700">{stats.clicked}</div>
              <div className="stat-desc text-red-700">
                {stats.sentTotal > 0
                  ? Math.round((stats.clicked / stats.sentTotal) * 100)
                  : 0}
                % click rate
              </div>
            </div>
            <div className="stat bg-green-50 rounded-xl p-3">
              <div className="stat-title text-green-700">Top Template</div>
              <div className="stat-value text-green-700 text-lg capitalize">
                {stats.mostPopularTemplate}
              </div>
            </div>
          </div>
        </div>

        <div className="  bg-[#D9D9D9]  p-6 flex-1 h-[150px] justify-center  gap-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-4xl bg-[url(/bg-sign-3.png)]  bg-cover bg-no-repeat  bg-left">
          <h2 className="text-xl font-semibold  ">Send Phishing Email</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex gap-6 items-center"
          >
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input input-bordered w-full"
                placeholder="target@example.com"
              />
            </div>
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name (Optional)</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                placeholder="John Doe"
              />
            </div>
            <div className="form-control">
              <label htmlFor="target_url" className="label">
                <span className="label-text">Target URL (Optional)</span>
              </label>
              <input
                type="text"
                id="target_url"
                value={target_url}
                onChange={(e) => setTargetUrl(e.target.value)}
                className="input input-bordered w-full"
                placeholder="https://google.com"
              />
            </div>
            <div className="form-control">
              <label htmlFor="template" className="label">
                <span className="label-text">Template</span>
              </label>
              <select
                id="template"
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="select select-bordered w-full"
              >
                {templates.map((template) => (
                  <option key={template} value={template}>
                    {template.charAt(0).toUpperCase() + template.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn  ">
              <Mail className="w-4 h-4 mr-2" />
              Send Test Email
            </button>
          </form>
        </div>
      </div>

      <div className="flex-1 flex flex-row   gap-6 pt-6">
        {/* Statistics */}

        {/* All Attacks List */}
        <div className="  bg-[#D9D9D9]  p-6 flex-1   gap-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-4xl bg-[url(/bg-sign-3.png)]  bg-cover bg-no-repeat  bg-left">
          <h2 className="text-xl font-semibold mb-4 y">Phishing Campaigns</h2>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="loading loading-spinner loading-lg y"></div>
            </div>
          ) : error ? (
            <div className="alert alert-error">
              <AlertTriangle className="w-6 h-6" />
              <span>{error}</span>
            </div>
          ) : attacks.length === 0 ? (
            <div className="alert alert-info">
              <Info className="w-6 h-6" />
              <span>No phishing emails have been sent yet.</span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table  w-full">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Template</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {attacks.map((attack) => (
                    <tr
                      key={attack.id}
                      className={`hover cursor-pointer `}
                      onClick={() => handleAttackClick(attack)}
                    >
                      <td className="font-medium">{attack.message_id}</td>
                      <td className="capitalize">{attack.template_name}</td>
                      <td>
                        <span
                          className={`badge ${
                            attack.status === "Clicked"
                              ? "badge-error"
                              : attack.status === "Opened"
                                ? "badge-warning"
                                : "badge-info"
                          }`}
                        >
                          {attack.status}
                        </span>
                      </td>
                      <td>
                        {new Date(
                          attack.logs[0]?.timestamp || Date.now(),
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Send Email Form */}

        {/* Selected Attack Log */}
        {selectedAttack && (
          <div className="  bg-[#D9D9D9]  p-6 flex-1   gap-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]   flex flex-col rounded-4xl bg-[url(/bg-sign-3.png)]  bg-cover bg-no-repeat  bg-left">
            <h2 className="text-xl font-semibold mb-4 y flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Campaign Details
            </h2>

            <div className="mb-4">
              <p>
                <span className="font-medium">ID:</span>{" "}
                {selectedAttack.message_id}
              </p>
              <p>
                <span className="font-medium">Template:</span>{" "}
                <span className="capitalize">
                  {selectedAttack.template_name}
                </span>
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span
                  className={`font-bold ${
                    selectedAttack.status === "Clicked"
                      ? "text-red-600"
                      : selectedAttack.status === "Opened"
                        ? "text-yellow-600"
                        : "text-blue-600"
                  }`}
                >
                  {selectedAttack.status}
                </span>
              </p>
            </div>

            <h3 className="font-medium text-lg mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Event Timeline
            </h3>

            <ul className="timeline timeline-vertical">
              {selectedAttack.logs.map((log, index) => {
                const colors = getTimelineStepColors(log.event_type);
                return (
                  <li key={log.id}>
                    {index < selectedAttack.logs.length - 1 && (
                      <hr className={colors.line} />
                    )}
                    <div className="timeline-start text-sm">
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                    <div
                      className={`timeline-middle rounded-full p-2 ${colors.icon}`}
                    >
                      {getEventIcon(log.event_type)}
                    </div>
                    <div className={`timeline-end timeline-box ${colors.box}`}>
                      <p className="font-bold">{log.event_type}</p>
                      {log.event_type === "Clicked" && log.target_url && (
                        <p>
                          <span className="font-medium">URL:</span>{" "}
                          {log.target_url}
                        </p>
                      )}
                      {log.user_agent && (
                        <p>
                          <span className="font-medium">Browser:</span>{" "}
                          {log.user_agent}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
