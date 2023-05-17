import Link from "next/link";

import { RouteType } from "@/types";

interface Props {
  pathNames: RouteType[];
}

const Navigator = ({ pathNames }: Props) => {
  return (
    <>
      {pathNames.map(({ path, name, isExternal = false }: RouteType) => (
        <li key={path}>
          {isExternal ? (
            <a href={path} target="_blank" rel="noreferrer">
              {name}
            </a>
          ) : (
            <Link href={path}>{name}</Link>
          )}
        </li>
      ))}
    </>
  );
};

export default Navigator;
