import { Link } from "@inertiajs/inertia-react";
import React from "react";
import App from "../../Layouts/App";

export default function Index(props) {
    const { users } = props;
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">Users</div>
                <div className="card-body">
                    <table className="table table-striped table-hover">
                        <thead className="fw-bold">
                            <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Username</td>
                                <td>Email</td>
                                <td>Location</td>
                                <td className="text-end">Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.location}</td>
                                    <td>
                                        <div className="dropdown text-end">
                                            <button
                                                className="btn btn-sm p-0"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-three-dots-vertical"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link
                                                        href="#"
                                                        as="button"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        as="button"
                                                        className="dropdown-item"
                                                    >
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        as="button"
                                                        className="dropdown-item"
                                                    >
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

Index.layout = (page) => <App title="Users" children={page} />;
