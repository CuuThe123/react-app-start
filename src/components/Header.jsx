import logoImg from "../assets/tuhoc.cc.png";

export default function Header() {
  return (
    <>
      <header>
        <img
          src={logoImg}
          alt="ảnh logo"
        />
        <h1>tuhoc.cc Quiz</h1>
      </header>
    </>
  );
}
