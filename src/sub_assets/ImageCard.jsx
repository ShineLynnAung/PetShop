import React from "react";

function ImageCard() {
  const list = [
    {
      name: "Medical Administration",
      bg: "#ff7e61",
      border: "#ff7e61",
      content:
        "Our team of experienced proffessionals can help with everything from pills to injections to make your pet stay healty as always.",
        color:"white",
    },
    {
      name: "Pet Care",
      bg: "#e1ddd9",
      border: "black",
      content: `Teaching your new pup or kitten what it
      means to be a good boy or girl isn't always easy,but we're here to help them to be like
      it.`,
      color:"black"
    },
    {
      name: "Overnight Care",
      bg: "#e1ddd9",
      border: "black",
      content:`
If you're away for the night,we can stop by in the evening and morning to take care of all your pet's when you all need it.`,
color:"black"
    },
  ];
  return (
    <>
      <div className="mt-8 hidden md:flex gap-8 justify-between ">
        {list.map((item) => (
          <div
          className={`w-[300px] h-[200px] rounded-lg border transition ease-in delay-50 hover:-translate-y-1 hover:scale-110 duration-200`}
            style={{
              backgroundColor: item.bg, border: `1px solid ${item.border}`,
            }}>
            <h1 className="font-bold text-xl mx-5 mt-4">{item.name}</h1>
            <p className="text-lg mx-5 mt-3">{item.content}</p>
          </div>
        ))}
      </div>
      <div className="md:hidden mt-8 gap-8 justify-between">
        {list.map((item) => (
          <div
          className="transition ease-in delay-50 hover:-translate-y-1 hover:scale-110 duration-200"
            style={{
              width: "500px",
              height: "300px",
              backgroundColor: item.bg,
              borderRadius: "0.5rem",
              border: `1px solid ${item.border}`,
              marginBottom: "2rem",
              color: item.color
            }}
          >
            <h1 className="font-bold text-3xl mx-5 mt-4">{item.name}</h1>
            <p className="text-2xl mx-5 mt-3">{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageCard;
