import gsap from "gsap";

export function onceTrans(target, duration) {
  const tl = gsap.timeline();
  tl.from(target, {
    duration: duration,
    opacity: 0,
    x: "100%",
    scale: 0.5,
    transformOrigin: "50% 50%",
  });
}


export function leaveTrans(Node, duration) {
  const tl = gsap.timeline();
  tl.set(".loading-screen", { right: "0%", width: "0%" });
  tl.to(".loading-screen", { duration , width: "100%" });
}

export function enterTrans(Node, duration, delay) {
  const tl = gsap.timeline();
   tl.to(".loading-screen", { duration, right: "100%", width: "0%", delay});
   tl.from(Node, { duration , xPercent: 100},"<");
 ;
}

export function enterTrans2(Node, duration, delay) {
  const tl = gsap.timeline();
   tl.set(".loading-screen", {bottom: "100%" , width: "100%"})
   tl.to(".loading-screen", { duration, bottom: "100%", width: "0%", delay});
   tl.from(Node, { duration , yPercent: -100},"<");
 ;
}

