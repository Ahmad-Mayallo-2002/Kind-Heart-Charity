import { useEffect } from "react";
import { data } from "../assets/data/projectData.js";

export const Slider = () => {
    useEffect(() => {
        const x = document.querySelectorAll(".slide");
        x[0].classList.add("active");
        let counter = 0;
        setInterval(() => {
            x[counter].style.animation = 'next1 0.5s ease-in forwards';
            if(counter >= x.length-1){
                counter = 0;
            }
            else{
                counter++;
            }
            x[counter].style.animation = 'next2 0.5s ease-in forwards';
        }, 5000);
    }, []);
    return (
        <>
            <main className="position-relative overflow-hidden">
                {
                    data ? data.sliderData.map(
                        (slide, key) => {
                            const {title, description, imageUrl} = slide;
                            return (
                                <div key={key} className="position-absolute slide position-relative" style={{backgroundImage: `url(${imageUrl})`}}>
                                    <div className="content position-absolute">
                                        <article className="position-absolute">
                                            <h2 className="fw-bold">{title}</h2>
                                            <p>{description}</p>
                                        </article>
                                    </div>
                                </div>
                            )
                        }
                    ) : <p>...Loading</p>
                }
            </main>
        </>
    )
}