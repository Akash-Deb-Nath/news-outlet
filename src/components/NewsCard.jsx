import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";


export default function NewsCard({ news }) {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
    } = news;

    const formattedDate = new Date(author.published_date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <div className="card bg-base-100 shadow-md mb-6 p-5 space-y-2">
            {/* AUTHOR HEADER */}
            <div className="flex items-center justify-between bg-base-200 p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-sm">{author.name}</h3>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-600 text-lg">
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </div>

            {/* TITLE */}
            <h2 className="text-lg font-bold leading-snug">{title}</h2>

            {/* THUMBNAIL */}
            <img
                src={thumbnail_url}
                alt={title}
                className="rounded-xl w-full object-cover"
            />

            {/* DETAILS */}
            <p className="text-sm text-gray-600">
                {details.length > 200 ? details.slice(0, 200) + "... " : details}
                <Link to={`/news-details/${id}`} className="text-secondary font-medium text-sm">Read More</Link>
            </p>
            {/* FOOTER: RATING + VIEWS */}
            <div className="flex items-center justify-between pt-3 border-t border-accent
">
                <div className="flex text-yellow-500 text-xl items-center justify-center">
                    {Array.from({ length: 5 }, (_, i) =>
                        i < Number(rating.number)
                            ? <AiFillStar key={i} />
                            : <AiOutlineStar key={i} />
                    )} <span className="text-accent ml-1 text-sm">{rating.number}</span>
                </div>


                <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <FaRegEye className="text-lg" />
                    {total_view}
                </div>
            </div>
        </div>
    );
}
