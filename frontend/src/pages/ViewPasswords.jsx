import { useState } from "react";
import ListItem from "../components/vault/ListItem";
import LogoItem from "../components/global/LogoItem";
import ButtonItem from "../components/global/ButtonItem";
import FormItem from "../components/global/FormItem";
import { Link } from "react-router-dom";
import copyIcon from "../assets/copy-icon.svg";

const mock = [
  { id: "1", url: "www.google.com" },
  { id: "2", url: "www.facebook.com" },
  { id: "3", url: "www.twitter.com" },
  { id: "4", url: "www.kommunikar..." },
  { id: "5", url: "www.illuminati.org" },
];

const ViewPasswords = () => {
  const [plain, setPlain] = useState("");

  const handleReveal = (item) => {
    setPlain("Abv34$]dff4s@ff");
  };

  const copyPlain = () => {
    if (plain) navigator.clipboard.writeText(plain);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex items-center gap-3">
        <LogoItem title="LCKD" />
      </header>

      {/* List */}
      <section>
        <span className="inline-block bg-[#F2BE22] text-[#0B0B2E] text-xs font-bold tracking-wider px-3 py-1 rounded-t-md">
          STORED PASSWORDS
        </span>
        <div className=" space-y-3 border border-yellow-400/60 rounded-b-md rounded-tr-md p-3">
          {mock.map((item) => (
            <ListItem
              key={item.id}
              url={item.url}
              onEdit={() => {
                /* TODO navigate(`/vault/${item.id}/edit`) */
              }}
              onReveal={() => {
                handleReveal(item);
              }}
              className="border border-yellow-400/60 rounded-md"
            />
          ))}
        </div>
      </section>

      {/* Plain sight */}
      <section>
        <span className="inline-block bg-white text-[#0B0B2E] text-xs font-bold tracking-wider px-3 py-1 rounded-t-md">
          PLAIN SIGHT
        </span>
        <article className="space-y-2 relative border border-white rounded-b-md rounded-tr-md  p-1 bg-[#1a1442]">
          <input
            type="text"
            readOnly
            value={plain}
            placeholder="***********"
            className="w-full rounded-lg py-2.5 pl-3 text-white placeholder:text-white/50
                         border-none"
          />
          <button
            type="button"
            onClick={copyPlain}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/10"
            aria-label="Copy"
            title="Copy"
          >
            <img
              src={copyIcon}
              alt=""
              className="w-5 h-5 pointer-events-none"
            />
          </button>
        </article>
      </section>
      {/* Button */}
      <Link to="/vault/new">
        <ButtonItem label="NEW LCKD" />
      </Link>
    </div>
  );
};

export default ViewPasswords;
