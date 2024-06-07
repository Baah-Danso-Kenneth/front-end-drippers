import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetStylesQuery } from "../../redux/RTKQueries/FashionStyle/styleApi";

function BaseHeaderContent() {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const { data, error, isLoading } = useGetStylesQuery(undefined);

  // useEffect(() => {
  //   console.log('Data:', data);
  //   console.log('Error:', error);
  //   console.log('Is Loading:', isLoading);
  // }, [data, error, isLoading]);

  const handleMouseOver = (link: string) => {
    setShowContent(true);
    setActiveLink(link);
  };

  const handleMouseOut = () => {
    setShowContent(false);
  };

  const links: { text: string, path: string }[] = [
    { text: "styles", path: "/" },
    { text: "trends", path: "/" },
    { text: "shoes", path: "/" },
    { text: "bags", path: "/" },
    { text: "protip", path: "/" },
    { text: "exclusives", path: "/" },
    { text: "accessories", path: "/" },
    { text: "Fragrance", path: "/" },
    { text: "hat", path: "/" },
  ];

  return (
    <div>
      <div className="bg-[#767676] p-3">
        <div className="flex space-x-20 mx-10 items-center text-white">
          {links.map(({ text, path }) => (
            <Link
              key={text}
              to={path}
              onMouseOver={() => handleMouseOver(text)}
              onMouseOut={handleMouseOut}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
      {showContent && (
        <div className="mx-10 h-auto border z-10">
          <div>
            <h3>{activeLink}</h3>
            <div className="flex">
              {isLoading && <h1>Loading...</h1>}
              {error && <h1>Error loading styles</h1>}
              {data && Array.isArray(data.titles) ? (
                data.titles.map((title, index) => (
                  <div key={index} className="border p-3 m-2">
                    <h4>{title}</h4>
                    {/* Render other style information here if necessary */}
                  </div>
                ))
              ) : (
                <h1>No styles found</h1>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BaseHeaderContent;
