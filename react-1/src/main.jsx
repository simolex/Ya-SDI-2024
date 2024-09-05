import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { cinemas } from "./assets/mock";
// import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <div>
        {cinemas.map((cinema) => (
            <div key={cinema.id}>
                <h1>{cinema.name}</h1>
                cinema.films.length &&
                <h2>Films</h2>
                <ul>
                    {cinema.films.map((film) => (
                        <li key={film.id}> {film.name}</li>
                    ))}
                </ul>
                <h2>Reviews</h2>
                <ul>
                    {cinema.reviews.map((review) => (
                        <li key={review.id}> {review.text}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);
