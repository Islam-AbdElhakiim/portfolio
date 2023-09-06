import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/avatar.png"
      alt="avatar image"
      width="600"
      height="600"
      className=""
      draggable='false'
    />

  );
};

export default Avatar;
