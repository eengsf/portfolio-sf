import MainProjectRoboticDetail from "./MainProjectRoboticDetail";

const obj = {
  linetracer: {
    img: "linetracer.jpg",
    name: "Line Tracer Robot",
    desc: "A line tracer robot is designed to follow a specific line or path that is usually of a contrasting color to its background. This robot uses optical sensors to detect and follow the path, making adjustments to its movement to stay on the line.",
    linkDemo: "https://www.youtube.com/watch?v=mykIrf6aXog",
  },
  krpai: {
    img: "krpai.jpg",
    name: "Fire Fighting Robot",
    desc: "A fire-fighting robot has the mission to extinguish multiple fire points in different rooms of a maze. This robot is equipped with flame sensors and UV Tron sensors to detect the presence of fire points. It also features a spraying device operated by a pump driver. For navigation, the robot is equipped with ultrasonic sensors and IR Sharp sensors to detect the surrounding walls.",
    linkDemo: "https://www.youtube.com/watch?v=diCfQHWRh60&t=1s",
  },
  krsri: {
    img: "krsri.png",
    name: "SAR Robot",
    desc: "A SAR robot with a mission to extinguish multiple fire points and move objects to designated locations. This robot is equipped with a camera to detect objects, a flame sensor, and a UV Tron sensor to detect fire points. It also features a sprayer and a gripper, each operated by its respective driver. For navigation, the robot is equipped with ultrasonic sensors and IR sharp sensors to detect surrounding walls.",
    linkDemo: "https://www.youtube.com/watch?v=4l2zqPrFwx8&t=17s",
  },
  hexapod: {
    img: "hexapod.jpg",
    name: "Hexapod Robot",
    desc: "This hexapod robot is my final project with a mission to climb stairs. The robot uses inverse kinematics to determine the end effector of each leg. It is equipped with a trajectory planning system applied to each leg to prevent it from falling and to adjust to the incline of the stairs.",
    linkDemo: "https://www.youtube.com/watch?v=UPSTKmEljeU",
  },
};

const MainProjectRobotic = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-0 py-8 md:grid-cols-2">
      <MainProjectRoboticDetail
        img={obj.linetracer.img}
        name={obj.linetracer.name}
        desc={obj.linetracer.desc}
        linkDemo={obj.linetracer.linkDemo}
      />
      <MainProjectRoboticDetail
        img={obj.krpai.img}
        name={obj.krpai.name}
        desc={obj.krpai.desc}
        linkDemo={obj.krpai.linkDemo}
      />
      <MainProjectRoboticDetail
        img={obj.krsri.img}
        name={obj.krsri.name}
        desc={obj.krsri.desc}
        linkDemo={obj.krsri.linkDemo}
      />
      <MainProjectRoboticDetail
        img={obj.hexapod.img}
        name={obj.hexapod.name}
        desc={obj.hexapod.desc}
        linkDemo={obj.hexapod.linkDemo}
      />
    </div>
  );
};
export default MainProjectRobotic;
