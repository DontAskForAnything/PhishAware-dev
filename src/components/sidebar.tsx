"use client";
import Avatar from "boring-avatars";
import { useState, useEffect } from "react";
import {
  Trophy,
  LifeBuoy,
  Settings,
  Shrimp,
  Gamepad2,
  Crown,
  ChartLine,
  Book,
  Shield,
  User,
  Building2,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar({
  type = "user",
}: {
  type?: "user" | "admin";
}) {
  const pathname = usePathname(); // Get the current route
  const [active, setActive] = useState("");
  console.log(active);
  // Define menu items with their corresponding paths
  let menuItems = [
    { name: "Wyzwania", icon: <Gamepad2 size={25} />, path: "/user/wyzwania" },
    { name: "Ranking", icon: <Crown size={25} />, path: "/user/ranking" },
    {
      name: "Osiągnięcia",
      icon: <Trophy size={25} />,
      path: "/user/osiagniecia",
    },
    { name: "Pomoc", icon: <LifeBuoy size={25} />, path: "/user/pomoc" },
  ];
  if (type === "admin") {
    menuItems = [
      {
        name: "Analiza",
        icon: <ChartLine size={25} />,
        path: "/admin/analiza",
      },
      { name: "Moduły", icon: <Book size={25} />, path: "/admin/moduly" },
      {
        name: "Testy bezpieczeństwa",
        icon: <Shield size={25} />,
        path: "/admin/testy-bezpieczenstwa",
      },
      {
        name: "Użytkownicy",
        icon: <User size={25} />,
        path: "/admin/uzytkownicy",
      },
      { name: "Firma", icon: <Building2 size={25} />, path: "/admin/firma" },
      { name: "Pomoc", icon: <LifeBuoy size={25} />, path: "/admin/pomoc" },
    ];
  }

  // Set active page based on URL
  useEffect(() => {
    // Check if the current pathname starts with the menu item path
    const currentPath = pathname;
    console.log(currentPath);

    // Iterate through the menu items and set the active item
    for (const item of menuItems) {
      console.log(currentPath.startsWith(item.path));
      if (currentPath.startsWith(item.path)) {
        setActive(item.path); // Set active if the current path matches
        break;
      }
    }
  }, [pathname]);

  if (pathname.includes("lekcja")) {
    return <></>;
  }
  return (
    <div className="h-screen w-[300px] bg-[#378075] text-white flex flex-col p-4 px-[10px">
      <div className="flex flex-row gap-8 px-2 pt-2  my-2">
        <Shrimp size={33} />
        <h1 className="text-2xl font-extrabold mb-6">PhishAware</h1>
      </div>
      <nav className="flex flex-col space-y-5">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path} // Navigate to the path
            className={`flex items-center px-3 gap-1.5 h-11 rounded-xl transition-all cursor-pointer ${
              pathname === item.path
                ? "bg-[#3F9081] text-white text-xl"
                : "hover:bg-[#3F9081] text-xl"
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-4 w-full my-2">
        <div className="dropdown dropdown-right dropdown-top w-full">
          <div
            role="button"
            className="flex items-center justify-between px-2  flex-1  flex-row   gap-3 cursor-pointer "
          >
            <div className="flex flex-row items-center gap-5">
              <Avatar
                size={27}
                className="rounded-full"
                name="Michał Jasiński"
              />
              <p className="text-lg ">Michał Jasiński</p>
            </div>
            <Settings size={20} className="focus:outline-none" tabIndex={0} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow  ml-8 rounded-box w-52 bg-[#378075] 0 transition-all duration-500 ease-in-out"
          >
            <li>
              <a>Ustawienia</a>
            </li>
            <li>
              <Link href="/">Wyloguj</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
