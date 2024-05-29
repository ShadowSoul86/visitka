import Link from "next/link";

const Registry = () => {
  return (
    <div
      id="registry"
      className="flex flex-col registry mac:flex-row mac:justify-between"
    >
      <div className="flex flex-col gap-[18px] mini:max-w-[365px] medium:max-w-[443px] pad:max-w-[720px] mac:max-w-[607px] full:max-w-[763px]">
        <h2 className={`font-sans default-h2`}>Запись</h2>
        <div
          className={`text-[16px] pad:text-[20px] mac:text-[22px] full:text-[28px]`}
        >
          Выберите удобный способ связи, и мы обсудим запись на окрашивание
          волос, учитывая ваши предпочтения.
        </div>
      </div>

      <div className="flex flex-wrap mini:flex-nowrap max-w-[300px] phone:max-w-[420px] mini:max-w-[466px] items-center mini:justify-start gap-16 phone:gap-6 mini:phone:gap-10 mac:items-end">
        <Link href={"#"}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="/icons/iconSprite.svg#social-vk"></use>
          </svg>
        </Link>
        <Link href={"#"}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="/icons/iconSprite.svg#social-tg"></use>
          </svg>
        </Link>
        <Link href={"#"}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="/icons/iconSprite.svg#social-wts"></use>
          </svg>
        </Link>
        <Link href={"#"}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="/icons/iconSprite.svg#social-viber"></use>
          </svg>
        </Link>
        <Link href={"#"}>
          <svg
            width="55"
            height="45"
            viewBox="0 0 55 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="/icons/iconSprite.svg#social-gmail"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default Registry;
