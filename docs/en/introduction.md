# Personal Introduction

## Education Background

- (Sep 2018 - Jul 2022) [School of Aeronautic Science and Engineering](https://www.ase.buaa.edu.cn),
    [Beihang University](https://www.buaa.edu.cn/) (BUAA)
- (Sep 2022 - Persent) [School of Aeronautic Science and Engineering](https://www.ase.buaa.edu.cn),
    [Beihang University](https://www.buaa.edu.cn/) (BUAA)

## Internship Experience

- City University of Hong Kong [GAIRLAB](https://metaslam.github.io/) (2024.11-2024.12) responsible for the hardware and navigation algorithm development of humanoid robot.

- University of Hong Kong [ArcLab](https://arclab.hku.hk/index.html) (2025.2- now) responsible for the research on high-speed tracking algorithm of UAV

## Research Experience

<h3 style="text-align: center;">Research on the Consistency Framework of Dynamic SLAM and Segmentation</h3>

<div style="display: flex; align-items: center; margin-top: 0px; justify-content: flex-end;" class="sidebar-logo">
  <img src="../../media/openloris.png" alt="Logo" width="200" height="150" style="align-self: center; margin-left: auto;">
  <img src="../../media/lidarcamera.png" alt="Logo" width="320" height="100" style="align-self: center; margin-right: auto;">
</div>

Research on SLAM and segmentation consistency framework in dynamic environment. This study improves perception by distinguishing feature points. Meanwhile, considering the obtained environment segmentation to eliminate the influence of dynamic targets on localization and mapping, currently test on the [openLORIS](https://lifelong-robotic-vision.github.io/dataset/) dataset. At the same time, consider the limitations of the range of visual sensors. Combining environmental image information obtained from cameras with accurate depth estimation obtained from LiDAR. This can obtain rich environmental 3D feature points for environmental obstacle perception and dynamic obstacle motion estimation. This work is still ongoing.(2024)

---

<h3 style="text-align: center;">Research on obstacle avoidance of quadcopter UAVs in dense dynamic environments</h3>

<div style="display: flex; align-items: center; margin-top: 0px; justify-content: flex-end;" class="sidebar-logo">
  <img src="../../media/test.png" alt="Logo" width="480" height="150" style="text-align: right; margin-left: auto;">
  <img src="../../media/simulation.png" alt="Logo" width="250" height="100" style="text-align: right; margin-right: auto;">
</div>

Research on obstacle avoidance flight of UAVs in dynamic environments. A consistent method has been developed to distinguish between dynamic and static point clouds, which quickly obtains object estimation speeds through adjacent point cloud frames. At the same time, an active perception trajectory planning method is proposed for UAVs with limited perception field of view. n addition, based on the open-source pedestrian motion library [pedsim_ros](https://github.com/srl-freiburg/pedsim_ros) mapping in the [Gazebo](https://gazebosim.org) to simulate the motion effects of real pedestrians. (2024)

---

<h3 style="text-align: center;">Research on Dynamic Environment Perception Technology of Lidar</h3>

<img src="../../media/avia.png" alt="123 " width="500" height="300" style="display: block; margin-left: auto; margin-right: auto;">

Obtaining point cloud data through LiDAR for studying dynamic environments. Developed an environment perception algorithm based on LiDAR and implemented it in [Gazebo](https://gazebosim.org) We have built a pedestrian simulation environment internally and used radar for real-time perception. Simultaneously using [Livox-AVIA](https://www.livoxtech.com/cn/avia) in real environments. Testing and verification of multiple dynamic targets using LiDAR unmanned aerial vehicles.(2024)

---

<h3 style="text-align: center;">Research on Visual Guidance for Commercial Aircraft Landing Technology</h3>

<div style="display: flex; align-items: center; margin-top: 0px; justify-content: flex-end;" class="sidebar-logo">
  <img src="../../media/landing_3.gif" alt="Logo" width="380" height="150" style="text-align: right; margin-left: auto;">
  <img src="../../media/landing_1.gif" alt="Logo" width="380" height="100" style="text-align: right; margin-right: auto;">
</div>

According to [PIDNet](https://github.com/XuJiacong/PIDNet) Real time semantic segmentation of the runway is performed on the onboard NUC to automatically guide fixed wing aircraft to maintain lateral attitude. Attitude control is performed based on the error between the runway centerline and the image centerline. (2024)

---

<h3 style="text-align: center;">Research on Multi UAV Formation Flying and Collaborative Search</h3>

<img src="../../media/fomation.gif" alt="123 " width="500" height="300" style="display: block; margin-left: auto; margin-right: auto;">

Participate in the development of high-speed quadcopter drone formation flight research. Based on RTK, global positioning is provided and message exchange is achieved through 4G modules, achieving formation maintenance at a speed of 7m/s. Simultaneously achieved three machine collaborative search of ground areas and distributed communication.(2024)

---

<h3 style="text-align: center;">Research on Foldable Full Dynamic Thin Film Wing Micro UAV</h3>

<img src="../../media/microsoft_uav.gif" alt="123 " width="400" height="300" style="display: block; margin-left: auto; margin-right: auto;">

I participated in the research of flexible and foldable micro unmanned aerial vehicles during my undergraduate studies, which can be ejected from a folded state and provide lift through the deformation of the membrane wing surface. (2021)

This work was awarded the third prize of students' academic scientific and technological works in "[FengRuCup](https://www-fengrubei-net.e2.buaa.edu.cn/)" in 2020 and 2021. And the first prize of the 7th China International "Internet plus" Undergraduate Innovation and Entrepreneurship Competition in 2021.

The achievement has obtained the invention patent of "Foldable Full Dynamic Thin Film Wing Micro UAV System", with patent number CN202210063076.3.  

---

<h3 style="text-align: center;">Research on Trajectory Tracking Controller of quadcopter UAV in SE (3)</h3>  

<div style="display: flex; align-items: center; margin-top: 0px; justify-content: flex-end;" class="sidebar-logo">
  <img src="../../media/controller.gif" alt="Logo" width="480" height="130" style="text-align: right; margin-left: auto;">
  <img src="../../media/se3controller.png" alt="Logo" width="410" height="80" style="text-align: right; margin-right: auto;">
</div>  

The content of the undergraduate graduation project is the development of a trajectory tracking controller for quadcopter unmanned aerial vehicles based on PX4. Develop based on [Geometric Tracking Control of a Quadrotor UAV on SE(3)](../document/tracking_controller.pdf). Considering the differential flatness characteristics of quadcopter drones, their attitude tracking errors are mapped in SE (3) space for calculation to ensure accurate trajectory tracking. (2022)  

---

<h3 style="text-align: center;">Research on laser tethered unmanned aerial vehicle positioning and hovering control</h3>

<img src="../../media/TetheredUAV.png" alt="123 " width="500" height="300" style="display: block; margin-left: auto; margin-right: auto;">  

Develop a tethered drone platform equipped with LiDAR sensors([Livox-mid360](https://www.livoxtech.com/cn/mid-360)) and deploy [FAST_LIO](https://github.com/hku-mars/FAST_LIO) to provide precise positioning. At the same time, integrate a downward looking monocular camera to recognize Apriltag, in order to achieve tracking and precise landing with ground mobile robots. (2023)  

---

<h3 style="text-align: center;">Secondary development of quadruped robot platform</h3>

<div style="display: flex; align-items: center; margin-top: 0px; justify-content: flex-end;" class="sidebar-logo">
  <img src="../../media/dog.jpg" alt="Logo" width="440" height="150" style="text-align: right; margin-left: auto;">
  <img src="../../media/robotdog.gif" alt="Logo" width="330" height="100" style="text-align: right; margin-right: auto;">
</div>  

Ensure robust operation of [VINS-Fusion](https://github.com/HKUST-Aerial-Robotics/VINS-Fusion) on quadruped robots and real-time perception of environmental obstacles through external IMU data. Developed a local motion planning algorithm based on DWA in obstacle avoidance. (2023)  

The work has obtained an invention patent for "Intelligent Autonomous Exploration Method and Device for Foot type Robots Suitable for Complex Building Indoor Environments", with patent number CN202311066365.X.

---

<h3 style="text-align: center;">Quadcopter drone intelligent algorithm competition</h3>

<img src="../../media/competiton.gif" alt="123 " width="500" height="300" style="display: block; margin-left: auto; margin-right: auto;">

Participate in the "[Zhihang Cup](https://www.ghstf.org.cn/ds/2403d8d577.html)" I won first place in the simulation competition and third place in the physical competition in the national unmanned algorithm competition. This algorithm competition includes autonomous exploration of unknown environments by drones, target search and tracking, and identification of landing areas.(2023)

## Publication

[1] Y. Lin, Z. Meng, J. Ji, Z. Wang and W. Gai, "Efficient Perception and Obstacle Avoidance Flight of UAVs in Dynamic Dense Environments," 2024 IEEE International Conference on Robotics and Biomimetics (ROBIO). (Accepted).  

[2] Z. Wang, Z. Meng, Y. Lin, G. Zhao, J. Wang, and C. Jiang, “An Efficient Dynamic Obstacle Perception and Avoidance framework for Robust Real-Time UAV Trajectory Planning,” IEEE Transactions on Automation Science and Engineering. (Under review).  

---

## Honors and Awards  

Graduate Academic Scholarship second prize, 2023.  
Outstanding Graduates of Beihang University(Bachelor), 2022.  
Undergraduate subject competition scholarship first prize, 2021.  
Undergraduate Innovation and Entrepreneurship Scholarship first prize, 2021.  
Outstanding Scholarship for Undergraduate Learning second prize, 2020, 2021.  
7th China International "Internet plus" Undergraduate Innovation and Entrepreneurship Competition first prize, 08.2021.  
13th Zhou Peiyuan College Student Mechanics Competition team competition third prize, 06.2021.  
American Mathematical Modeling Competition Honorable prize, 04.2021.  
7th MathorCup College Mathematical Modeling Challenge second prize, 06.2021.  
"Feng Ru Cup" Student Academic and Technological Works Award third prize, 2020, 2021.

## Skills

Programming language: C++, python，matlab.  
Development experience: PX4 flight control secondary development, Ubuntu, ROS system, Gazebo simulation environment.  
English: Passed CET-6,  IELTS total score is 6.5.  
Hardware capabilities: 3D modeling, unmanned aerial vehicle platform construction.  

<p style="text-align: center;">Previously built drone platform</p>

<div style="display: flex; align-items: center; margin-top: 0px; justify-content: flex-end;" class="sidebar-logo">
  <img src="../../media/drone1.jpg" alt="Logo" width="210" height="150" style="text-align: right; margin-left: auto;">
  <img src="../../media/drone2.jpg" alt="Logo" width="250" height="100" style="text-align: right; margin-right: 1px;">
  <img src="../../media/drone3.jpg" alt="Logo" width="250" height="100" style="text-align: right; margin-right: auto;">
</div>

---

> Updated at 10th Oct 2024
