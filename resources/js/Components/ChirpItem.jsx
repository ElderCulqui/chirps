import { useState } from "react";
import Dropdown from "./Dropdown";
import ChirpForm from "./ChirpForm";

export default function ChirpItem({ chirp }) {
    const [editing, setEditing] = useState(false);

    return (
      <div className="flex p-6 space-x-2">
        <svg
          className="w-6 h-6 text-gray-600 -scale-x-100 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          ></path>
        </svg>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-800 dark:text-gray-200">
                {chirp.user.name}
              </span>
              <small className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {chirp.created_at}
              </small>
              {chirp.edited && (
                <small className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                    &middot; edited
                </small>
              )}
            </div>
          </div>
          {editing ? (
              <ChirpForm className="mt-4" chirp={chirp} setEditing={setEditing} />
          ) : (
            <p className="mt-4 text-lg text-gray-900 dark:text-gray-100">
                {chirp.message}
            </p>
          )}
        </div>
        <Dropdown>
            <Dropdown.Trigger>
                <button>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </button>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Button as='button' onClick={() => setEditing(true)}>
                    Edit
                </Dropdown.Button>
                <Dropdown.Link as='button' 
                    href={route('chirps.destroy', chirp.id)}
                    method="delete"
                >
                    Delete
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
      </div>
    )
  }
