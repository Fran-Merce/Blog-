import Link from "next/link";

import { RouteType } from "@/types/routes.type";

interface Props {
  pathNames: RouteType[];
}
function Navigator({ pathNames }: Props) {
  console.log(pathNames);
  return (
    <>
      {pathNames.map((route: RouteType) => (
        <li key={route.path}>
          <Link style={{ color: "#FFF" }} href={route.path}>
            {route.name}
          </Link>
        </li>
      ))}
    </>
  );
}

export default Navigator;
