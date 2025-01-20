import React from 'react'
function AboutCard() {
    const images=[
        {
            id: 1,
            image:"https://images.unsplash.com/photo-1669001247645-679497ce9368?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bg: "#e1ddd9",
            title:"Medical Check UP",
            font: "black"

        },{
            id:2,
            image:"https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0fGVufDB8fDB8fHww",
            bg:"#ff7e61",
            title: "Special Care For Pets",
            font: "white"
        },
        {
            id:3,
            image:"https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGV0fGVufDB8fDB8fHww",
            bg:"#e1ddd9",
            title:"Experienced Doctors",
            font:"black"
        }
    ]
return (
    <>
    <div className='hidden md:flex justify-between'>
        {images.map((item) => (
            <div className='w-[300px] h-[350px] rounded-xl transition ease-in delay-50 hover:-translate-y-1 hover:scale-110 duration-200 mx-2' style={{ backgroundColor: item.bg }}>
                <div className='w-[260px] h-[200px] flex items-center justify-center mx-auto'>
                    <img src={item.image} alt={`Image ${item.id}`} className='rounded-lg' />
                </div>
                <h1 className='font-bold text-xl text-center' style={{color: item.font}}>{item.title}</h1>
                <p className='text-center text-pretty mt-3' style={{color: item.font}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus beatae reprehenderit perferendis delectus excepturi ratione.</p>
            </div>
        ))}
    </div>

    <div className='md:hidden flex items-center justify-center flex-col'>
        {images.map((item) => (
            <div className='w-[350px] h-[400px] rounded-xl transition ease-in delay-50 hover:-translate-y-1 hover:scale-110 duration-200 mb-10' style={{ backgroundColor: item.bg }}>
                <div className='w-[310px] h-[250px] flex items-center justify-center mx-auto'>
                    <img src={item.image} alt={`Image ${item.id}`} className='rounded-lg' />
                </div>
                <h1 className='font-bold text-xl text-center' style={{color: item.font}}>{item.title}</h1>
                <p className='text-center text-pretty mt-3' style={{color: item.font}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus beatae reprehenderit perferendis delectus excepturi ratione.</p>
            </div>
        ))}
    </div>
    </>
)
}

export default AboutCard