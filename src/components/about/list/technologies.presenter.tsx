import { useTheme } from "~/providers/ThemeContext";
import { TechsList } from "../detail/techs.list";
import { client, database, devops, language, methodology, server } from "~/constants/technologies";
import { THEMES } from "~/constants/themes";

export function TechnologiesPresenter() {
  const theme = useTheme().theme;
  const test = theme === THEMES.WINTER ? "bg-info/20" : "bg-info/50";
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-2">

      <div className="tech-base tech-category bg-base-300/50">
        Languages
      </div>
      <div>
        <TechsList techs={language} duration={5} styleClass="bg-secondary/50"/>
      </div>

      <div className="tech-base tech-category bg-base-300/40">
        Client
      </div>
      <div>
        <TechsList techs={client} duration={4} styleClass="bg-secondary/40"/>
      </div>

      <div className="tech-base tech-category bg-base-300/30">
        Server
      </div>
      <div>
        <TechsList techs={server} duration={3} styleClass="bg-secondary/30"/>
      </div>

      <div className="tech-base tech-category bg-base-300/20">
        Database
      </div>
      <div>
        <TechsList techs={database} duration={2} styleClass="bg-secondary/20"/>
      </div>

      <div className="tech-base tech-category bg-base-300/10">
        Methodologies
      </div>
      <div>
        <TechsList techs={methodology} duration={1} styleClass="bg-secondary/10"/>
      </div>

      <div className="tech-base tech-category bg-base-300/05">
        DevOps
      </div>
      <div>
        <TechsList techs={devops} duration={0} styleClass="bg-secondary/05"/>
      </div>

    </div>
  );
}