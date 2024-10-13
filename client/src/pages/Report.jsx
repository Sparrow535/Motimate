import { CircleCheckBig, CircleDotDashed } from "lucide-react";
import {  Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";

const Report = () => {
  // Color classes based on card names
  const cardStyles = {
    total: "bg-gray-300", // Soft gray for total tasks
    inProgress: "bg-gray-400", // Muted yellow for in-progress tasks
    completed: "bg-gray-500", // Muted green for completed tasks
  };

  const chartConfig = {
    type: "line",
    height: 300,
    series: [
      {
        name: "Completed",
        data: [50, 40, 300, 320, 6, 350, 200, 230, 500,400,7,8],
      },
      {
        name: "In Progress",
        data: [20, 30, 60, 80, 100, 70, 50, 30, 90,9,0,7], // Sample data for In Progress
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: true,
        },
      },
      title: {
        show: true,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617", "#FFBB00"], // Adjust colors for the two series
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        title: {
          text: "Months",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#616161",
          },
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        title: {
          text: "Total Tasks",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#616161",
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <main >
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-5 items-stretch">
        <div
          className={`flex max-w-sm p-4 ${cardStyles.total} border border-gray-200 rounded-3xl shadow`}
        >
          <div className="grid place-items-center ">
            <CircleCheckBig className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-white ms-5">30</h3>
            <p className="font-semibold text-white ms-5">Total Task</p>
          </div>
        </div>

        <div
          className={`flex max-w-sm p-4 ${cardStyles.inProgress} border border-gray-200 rounded-3xl shadow`}
        >
          <div className="grid place-items-center ">
            <CircleDotDashed className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-white ms-5">4</h3>
            <p className="font-semibold text-white ms-5">In Progress</p>
          </div>
        </div>

        <div
          className={`flex max-w-sm p-4 ${cardStyles.completed} border border-gray-200 rounded-3xl shadow`}
        >
          <div className="grid place-items-center ">
            <CircleCheckBig className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-white ms-5">11</h3>
            <p className="font-semibold text-white ms-5">Completed</p>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        ></CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>

    </main>
  );
};

export default Report;
