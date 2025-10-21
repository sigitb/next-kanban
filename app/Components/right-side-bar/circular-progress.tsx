import { CircularProgressbar } from "react-circular-progressbar";

export default function CircularProgress() {
    const presentace = 66;
    const primaryColor = '#15A25E'

    return (
        <div className="flex justify-center">
            <CircularProgressbar
                className="text-primary size-52 my-10"
                value={presentace}
                text={`${presentace}%`}
                styles={{
                    path: {
                        stroke: primaryColor,
                        strokeLinecap: "round",
                        transition: "stroke-dashoffset 0.5s ease 0s",
    
                    },
                    trail: {
                        stroke: "#e2e8f0",
                    },
                    text: {
                        fill: primaryColor,
                        fontSize: "16px",
                        dominantBaseline: "middle",
                        textAnchor: "middle",
                    }
                }}
            />
        </div>
    )
}