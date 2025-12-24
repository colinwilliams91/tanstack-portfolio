import { TechsList } from "../detail/techs.list";
import { client, database, devops, language, methodology, server } from "~/constants/technologies";
// import { Diff } from "./Diff";


export function TechnologiesPresenter() {
  return (
    // <div className="grid grid-cols-[auto_auto_1fr] gap-x-3 gap-y-2">
    <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2">
      <div className="glass rounded-field px-2 font-medium w-36 bg-info/50 text-accent-content">Languages</div>
      <div><TechsList techs={language} duration={5} styleClass="bg-base-100/15"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-36 bg-info/40 text-accent-content">Client</div>
      <div><TechsList techs={client} duration={4} styleClass="bg-base-100/15"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-36 bg-info/30 text-accent-content">Server</div>
      <div><TechsList techs={server} duration={3} styleClass="bg-base-100/15"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-36 bg-info/20 text-accent-content">Database</div>
      <div><TechsList techs={database} duration={2} styleClass="bg-base-100/15"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-36 bg-info/10 text-accent-content">Methodologies</div>
      <div><TechsList techs={methodology} duration={1} styleClass="bg-base-100/15"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-36 bg-info/05 text-accent-content">DevOps</div>
      <div><TechsList techs={devops} duration={0} styleClass="bg-base-100/15"/></div>
      {/* <div className="glass border-field px-2">⭐⭐⭐⭐⭐</div> */}
    </div>
  );
}