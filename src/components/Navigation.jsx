import { NavLink } from "react-router-dom";

import Icon from "@components/Icon";

import { ENDPOINTS } from "@config/constants";
import useGet from "@hooks/useGet";
import { getPath } from "@config/router";

const Navigation = () => {
  const { isLoading, data: planets } = useGet(ENDPOINTS.PLANETS);

  if (isLoading) return null;

  return (
    <nav id="mainNavigation">
      <ul>
        <li>
          <NavLink to="/">
            <Icon name="rocket" />
          </NavLink>
        </li>

        {planets.map(({ id, name }) => (
          <li key={id}>
            <NavLink to={getPath.planets(id)}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Navigation;