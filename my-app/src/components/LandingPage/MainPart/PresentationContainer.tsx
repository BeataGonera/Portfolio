

export const PresentationContainer = () => {
    return ( 
        <div className="bg-silver h-96 p-10 flex justify-around">
            <div className="my-description ml-24 h-full w-2/5 flex flex-col justify-center">
                <h1 className="text-5xl text-white mb-2">I'm Beata Gonera.</h1>
                <h1 className="text-5xl text-white text-right mb-8"><span className="text-yellow-orange">Front-end </span>Developer</h1>
                <div className="w-4/5">
                <p className="text-sm text-white mb-8 leading-6">After getting some experience in UX Design, 
                    I’ve decided that coding is something I would like to do. 
                    After graudating from Frontend Bootcamp, I’ve started designing 
                    my first apps, prototyping and creating them. </p>
                </div>
                <button className="bg-yellow-orange h-9 w-28 rounded-sm text-sm">Contact me</button>
            </div>

            <div className="photo w-[19rem] h-[32rem] bg-cover" style={{backgroundImage: "url(my-photo.png)"}}></div>
        </div>
     );
}
 
