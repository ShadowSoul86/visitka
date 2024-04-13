import Image from "next/image";
import Logo from "@/public/img/logo.svg";

const Politics = () => {
  return (
    <div className="pt-5 border-t-[1px] border-solid border-my-grey flex items-center justify-between">
      <div className={`text-[18px] font-normal text-my-grey`}>Политика конфиденциальности</div>
      <div>
        <Image
          width={32}
          height={44}
          className="flex items-center justify-center object-cover"
          src={Logo}
          alt="logo"
        />
      </div>
    </div>
  );
};
export default Politics;
