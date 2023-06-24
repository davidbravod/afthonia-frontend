import { CgFacebook } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
const Social = (props) => {
  return (
    <div className="flex justify-center gap-3">
      <a href="https://www.facebook.com/profile.php?id=100088226825893" target="_blank" rel="noopener noreferrer">
      <CgFacebook
        className={`cursor-pointer hover:text-white hover:border-[var(--color-primary)] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[var(--color-primary)] ${props.classes}`}
        size={props.size}
      />
      </a>
      <BsTwitter
        className={`cursor-pointer hover:text-white hover:border-[var(--color-primary)] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[var(--color-primary)] ${props.classes}`}
        size={props.size}
      />
      <a href="https://www.linkedin.com/company/afthonia-enterprises-llc/" target="_blank" rel="noopener noreferrer">
      <GrLinkedinOption
        className={`cursor-pointer hover:text-white hover:border-[var(--color-primary)] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[var(--color-primary)] ${props.classes}`}
        size={props.size}
      />
      </a>
      <a href="https://www.instagram.com/afthoniaent/" target="_blank" rel="noopener noreferrer">
      <AiOutlineInstagram
        className={`cursor-pointer hover:text-white hover:border-[var(--color-primary)] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[var(--color-primary)] ${props.classes}`}
        size={props.size}
      />
      </a>
    </div>
  );
};

export default Social;
