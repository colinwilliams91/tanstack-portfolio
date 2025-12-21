import { ClientTechs } from "../detail/techs.client";
import { DatabaseTechs } from "../detail/techs.database";
import { DevopsTechs } from "../detail/techs.devops";
import { LanguageTechs } from "../detail/techs.language";
import { MethodologyTechs } from "../detail/techs.methodology";
import { ServerTechs } from "../detail/techs.server";


export function TechnologiesPresenter() {
  return (
    <ul>
        <li>Client - <ClientTechs /></li>
        <li>Server - <ServerTechs /></li>
        <li>Database - <DatabaseTechs /></li>
        <li>Languages - <LanguageTechs /></li>
        <li>Methodologies - <MethodologyTechs /></li>
        <li>DevOps - <DevopsTechs /></li>
    </ul>
  );
}