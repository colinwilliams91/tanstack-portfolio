import { TechsList } from "../detail/techs.list";
import { client, database, devops, language, methodology, server } from "~/constants/technologies";
// import { Diff } from "./Diff";


export function TechnologiesPresenter() {
  return (
    // <div className="grid grid-cols-[auto_auto_1fr] gap-x-3 gap-y-2">
    <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2">
      <div className="glass rounded-field px-2 font-medium w-33">Languages</div>
      <div><TechsList techs={language} duration={14000} style="success"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-33">Client</div>
      <div><TechsList techs={client} duration={13000} style="success"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-33">Server</div>
      <div><TechsList techs={server} duration={12000} style="success"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-33">Database</div>
      <div><TechsList techs={database} duration={11000} style="success"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-33">Methodologies</div>
      <div><TechsList techs={methodology} duration={10000} style="success"/></div>
      {/* <div>⭐⭐⭐⭐⭐</div> */}

      <div className="glass rounded-field px-2 font-medium w-33">DevOps</div>
      <div><TechsList techs={devops} duration={9000} style="success"/></div>
      {/* <div className="glass border-field px-2">⭐⭐⭐⭐⭐</div> */}
    </div>
  );
}