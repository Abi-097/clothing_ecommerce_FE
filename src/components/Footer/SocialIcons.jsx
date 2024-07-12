import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon, index) => {
        const IconComponent = icon.name;
        return (
          <a
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              key={icon.name}
              className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
            >
              <IconComponent size={30} />
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
