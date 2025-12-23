import { TechsList } from "../detail/techs.list";
import { client, database, devops, language, methodology, server } from "~/constants/technologies";
// import { Diff } from "./Diff";


export function TechnologiesPresenter() {
  return (
    // <div className="grid grid-cols-[auto_auto_1fr] gap-x-3 gap-y-2">
    <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2">
      <div className="glass rounded-field px-2 font-medium w-33">Languages</div>
      <div><TechsList techs={language} duration={5} styleClass="bg-accent"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-33">Client</div>
      <div><TechsList techs={client} duration={4} styleClass="bg-content"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-33">Server</div>
      <div><TechsList techs={server} duration={3} styleClass="bg-success-300"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-33">Database</div>
      <div><TechsList techs={database} duration={2} styleClass="bg-error"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-33">Methodologies</div>
      <div><TechsList techs={methodology} duration={1} styleClass="bg-neutral-content-100/50"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-33">DevOps</div>
      <div><TechsList techs={devops} duration={0} styleClass="bg-accent"/></div>
      {/* <div className="glass border-field px-2">⭐⭐⭐⭐⭐</div> */}
    </div>
  );
}