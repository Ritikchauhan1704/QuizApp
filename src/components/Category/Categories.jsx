import Cards from "./Cards"
const Categories = () => {
    //14 Cateogories
    const category=[
        {
            topic:"General Knowledge",
            id:"9",
            img:"https://images.unsplash.com/photo-1593061231114-1798846fd643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Video Games",
            id:"15",
            img:"https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Anime",
            id:"31",
            img:"https://images.unsplash.com/photo-1592547097938-7942b22df3db?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Science and Nature",
            id:"17",
            img:"https://images.unsplash.com/photo-1514890084135-f16d926f4d03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Computers",
            id:"18",
            img:"https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Mathematics",
            id:"19",
            img:"https://images.unsplash.com/photo-1635372722656-389f87a941b7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Sports",
            id:"21",
            img:"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Geography",
            id:"22",
            img:"https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"History",
            id:"23",
            img:"https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Art",
            id:"25",
            img:"https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Animal",
            id:"27",
            img:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Vehicles",
            id:"28",
            img:"https://images.unsplash.com/photo-1516755538454-c8379d7a86aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Comic",
            id:"29",
            img:"https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            topic:"Gadgets",
            id:"30",
            img:"https://images.unsplash.com/photo-1602526432604-029a709e131c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]
    return (
        <>
        <h2 className="xl:text-4xl text-3xl text-center mt-5 mb-3 text-[#1F2544]">Choose a Category</h2>
        <div className="bg-[#1F2544] h-[1px] w-10/12 xl:w-1/2 md:w-2/3 sm:w-2/3 m-auto"></div>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-4 grid-cols-2 pl-4 pr-4 pb-4" >
            {category.map((items)=>(
                <Cards topic={items.topic} id={items.id} img={items.img} key={items.id}  />      
                
                ))}
        </div>
        </>
    )
}

export default Categories