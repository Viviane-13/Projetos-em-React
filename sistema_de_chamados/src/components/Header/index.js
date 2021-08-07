import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import "./header.css";
import avatar from "../../assets/avatar.png";

import { Link } from "react-router-dom";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div>
        <img
          src={user.avatarUrl === null ? avatar : user.avatarUrl}
          alt="Foto avatar"
        />
      </div>

      <Link to="/dashboard">
        <FiHome color="#FFF" size={24} />
        Chamados
      </Link>
      <Link to="/customers">
        <FiUser color="#FFF" size={24} />
        Clientes
      </Link>
      <Link to="/profile">
        <FiSettings color="#FFF" size={24} />
        Configurações
      </Link>
    </div>
  );
}
