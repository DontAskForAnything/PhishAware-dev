import Image from "next/image";

export const TreesAndDucks = ({ duck = false }: { duck?: boolean }) => (
  <>
    <Image
      src="/tree_3.png"
      alt="Trees"
      height={200}
      width={200}
      className="object-contain absolute bottom-0 left-0 max-h-[350px]"
      draggable={false}
    />
    <Image
      src="/tree_1.png"
      alt="Trees"
      height={200}
      width={200}
      className="object-contain absolute bottom-7 left-26 scale-125 max-h-[350px]"
      draggable={false}
    />
    {duck && (
      <>
        <Image
          src="/duck.png"
          alt="Trees"
          height={2000}
          width={2000}
          className="object-contain absolute bottom-0 max-h-[350px]"
          draggable={false}
        />
        <p className="text-6xl pl-50  text-white object-contain absolute bottom-80 max-h-[350px]">
          {" "}
          ?
        </p>
      </>
    )}
    <Image
      src="/tree_3.png"
      alt="Trees"
      height={200}
      width={200}
      className="object-contain absolute bottom-0 right-0 max-h-[350px]"
      draggable={false}
    />
    <Image
      src="/tree_1.png"
      alt="Trees"
      height={200}
      width={200}
      className="object-contain absolute bottom-7 right-26 scale-125 max-h-[350px]"
      draggable={false}
    />
  </>
);
