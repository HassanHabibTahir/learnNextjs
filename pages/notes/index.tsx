import Link from "next/link";
import React from "react";

const index = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {React.Children.toArray(
          notes.map((note, index) => (
            <div key={index + Math.random()} sx={{ width: "33%", p: 2 }}>
              <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
                <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                  <div sx={{ variant: "containers.card" }}>
                    <strong>{note.title}</strong>
                  </div>
                </a>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default index;
