"use client"
import StickyBox from "react-sticky-box";
import './globals.css'
import NewsTicker from "@/components/ltr/news-ticker-carousal/page";
import SunnyWeather from "@/components/ltr/sunny-wether/sunny-weather";
import { useBackgroundImageLoader } from "@/components/ltr/use-background-image/use-background-image";
import Layout from "@/components/ltr/layout/layout";
// import YoutubeVideo from "@/components/ltr/youtube-video/youtube-video";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
// import DatePickerComponents from "@/components/ltr/date-picker/date-picker";
import PollWidget from "@/components/ltr/poll-widget/poll";
// import HomeFeatureCarousal from "@/components/ltr/home-feature-carousal/home-feature-carousal";
// import HomeCenterSlider from "@/components/ltr/home-center-slider/home-center-slider";
import Tags from "@/components/ltr/tags/tags";
import { useEffect } from "react";
import Link from "next/link";
export default function Home() {
  useEffect(() => {
    // Your logic for setting dir attribute using JavaScript
    // For example:
    document.documentElement.removeAttribute('dir', 'rtl');
  }, []);
  {/* *** ADD AND REMOVE CLASS ON BODY TAG *** */ }
  useRemoveBodyClass(['home-nine'], ['home-six', 'home-seven', 'home-two', 'boxed-layout', 'layout-rtl']);
  {/* *** IMPORT BACKGROUND IMAGE *** */ }
  useBackgroundImageLoader()
  return (
    <Layout>
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        {/* START NEWSTRICKER */}
        <NewsTicker />
        {/*  END OF /. NEWSTRICKER */}
        {/* START FEATURE SECTION */}
        <div
          className="bg-img feature-section py-4 py-lg-3 py-xl-4"
          data-image-src="assets/images/bg-shape.png"
        >
          <div className="container">
            {/* <HomeFeatureCarousal /> */}
          </div>
        </div>
        {/* END OF /. FEATURE SECTION */}
        <div className="container" style={{paddingTop: '20px'}}>
          <div className="row gx-lg-5">
            {/* START MAIN CONTENT */}
            <div className=" leftSidebar d-block d-xl-block">
              <StickyBox >
                <div className="panel_header">
                  <h4>
                    <strong>Top </strong> Stories
                  </h4>
                </div>
                <a href="#" className="news-image">
                  <img
                    src="assets/images/masonry/slider/01.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div className="border-bottom posts">
                  <ul>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="#">
                            Trainings are getting really hard reaching the final
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">National</span>
                          </li>
                          <li>Jan 4, 2021</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisi ng elit,
                          sed do eiusmod tempor incididunt
                        </p>
                      </div>
                    </li>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="#">
                            The victory againts The Sharks brings us closer to the
                            Final
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">National</span>
                          </li>
                          <li>Jan 4, 2021</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisi ng elit,
                          sed do eiusmod tempor incididunt
                        </p>
                      </div>
                    </li>
                    <li className="d-none d-xl-block post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="#">
                            The next match against The Clovers will be this Friday
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">National</span>
                          </li>
                          <li>Jan 4, 2021</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisi ng elit,
                          sed do eiusmod tempor incididunt
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* START NAV TABS */}
                <div className="tabs-wrapper">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border-0 active"
                        id="most-viewed"
                        data-bs-toggle="tab"
                        data-bs-target="#most-viewed-pane"
                        type="button"
                        role="tab"
                        aria-controls="most-viewed-pane"
                        aria-selected="true"
                      >
                        Most Viewed
                      </button>
                    </li>
                    {/* <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border-0"
                        id="popular-news"
                        data-bs-toggle="tab"
                        data-bs-target="#popular-news-pane"
                        type="button"
                        role="tab"
                        aria-controls="popular-news-pane"
                        aria-selected="false"
                      >
                        Popular news
                      </button>
                    </li> */}
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="most-viewed-pane"
                      role="tabpanel"
                      aria-labelledby="most-viewed"
                      tabIndex={0}
                    >
                      <div className="most-viewed">
                        <ul id="most-today" className="content tabs-content">
                          <li>
                            <span className="count">01</span>
                            <span className="text">
                              <a href="#">
                                South Africa bounce back on eventful day
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">02</span>
                            <span className="text">
                              <a href="#">
                                Steyn ruled out of series with shoulder fracture
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">03</span>
                            <span className="text">
                              <a href="#">
                                BCCI asks ECB to bear expenses of team's India tour
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">04</span>
                            <span className="text">
                              <a href="#">
                                Duminy, Elgar tons set Australia huge target
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">05</span>
                            <span className="text">
                              <a href="#">
                                English spinners are third-class citizens, says
                                Graeme Swann
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div
                      className="tab-pane fade"
                      id="popular-news-pane"
                      role="tabpanel"
                      aria-labelledby="popular-news"
                      tabIndex={0}
                    >
                      <div className="popular-news">
                        <div className="p-post">
                          <h4>
                            <a href="#">
                              It is a long established fact that a reader will be
                              distracted by{" "}
                            </a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="#">
                                <i className="ti ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                        <div className="p-post">
                          <h4>
                            <a href="#">
                              It is a long established fact that a reader will be
                              distracted by{" "}
                            </a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="#">
                                <i className="ti ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                        <div className="p-post">
                          <h4>
                            <a href="#">
                              It is a long established fact that a reader will be
                              distracted by{" "}
                            </a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="#">
                                <i className="ti ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* END OF /. NAV TABS */}
              </StickyBox>
            </div>
            <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
              <StickyBox>
                {/* START POST CATEGORY STYLE ONE (Popular news) */}
                <div className="post-inner">
                  {/* post body */}
                  <div className="post-body py-0">
                    <article>
                      {/* <figure>
                        <a href="">
                          <img
                            src="assets/images/557x352-1.jpg"
                            width={345}
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </figure> */}
                      {/* <div className="post-info">
                        <h3 className="fs-4">
                          <a href="#">
                            Proin bibendum nisi sit amet purus viverra, vel ornare
                            purus interdum.
                          </a>
                        </h3>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Business</span>
                          </li>
                          <li>
                            By <span className="editor-name">John Doe</span>
                          </li>
                          <li>Aug 16, 2023</li>
                        </ul>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus sit voluptatem
                          accusantium doloremque laudantium, totamrem aperiam, eaque
                          ipsa quae ab illo inventore
                        </p>
                      </div> */}
                    </article>
                  </div>
                </div>
                {/* END OF /. POST CATEGORY STYLE ONE (Popular news) */}
                {/* <div className="news-grid-2 border-top pt-4 mb-4">
                  <div className="row gx-3 gx-lg-4 gy-4">
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="assets/images/187x125-1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="#" className="title">
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="assets/images/187x125-2.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="#" className="title">
                            It is a long established fact that a reader will be
                            distracted by
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="assets/images/187x125-3.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="#" className="title">
                            There are many variations of passages of Lorem Ipsum.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="assets/images/187x125-4.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="#" className="title">
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="assets/images/187x125-5.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="#" className="title">
                            It is a long established fact that a reader will be
                            distracted by
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="assets/images/187x125-6.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="#" className="title">
                            There are many variations of passages of Lorem Ipsum.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* START ADVERTISEMENT */}
                {/* <div className="add-inner">
                  <img
                    src="assets/images/add728x90-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div> */}
                {/* END OF /. ADVERTISEMENT */}
              </StickyBox>
            </div>
            {/* END OF /. MAIN CONTENT */}
          </div>
        </div>
        {/* START YOUTUBE VIDEO
        <div className="mb-4 py-5 position-relative video-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-6 text-center">
                <h3 className="text-white">Latest Video News</h3>
                <p className="text-white mb-0">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout.{" "}
                </p>
              </div>
            </div>
            <YoutubeVideo />
          </div>
        </div> */}
        {/* END OF /. YOUTUBE VIDEO */}
        <div
          className="bg-img feature-section py-4 py-lg-3 py-xl-4"
          data-image-src="../../assets/images/bg-shape.png"
        >
          <div className="container">
            {/* <HomeFeatureCarousal /> */}
          </div>
        </div>
        <section className="articles-wrapper">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="leftSidebar d-none d-xl-block">
                <StickyBox>
                  {/* START TECH & INNOVATION */}
                  {/* <div className="panel_inner">
                    <div className="panel_header">
                      <h4>
                        <strong>TECH &amp;</strong> INNOVATION
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="#" className="d-block mb-3">
                          <img
                            src="assets/images/340x215-12.jpg"
                            alt=""
                            className="img-fluid w-100"
                          />
                        </a>
                        <h5>
                          <a href="#">
                            Phasellus placerat massa nec metus ornare molestie.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">EUROPE</span>
                          </li>
                          <li>Jan 4, 2021</li>
                        </ul>
                        <p>
                          To understand the new politics stance and other pro
                          nationals of recent…
                        </p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="#">
                            Trainings are getting really hard reaching the final
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="#">
                            The victory againts The Sharks brings us closer to the
                            Final
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="#">
                            The next match against The Clovers will be this Friday
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                  {/* END OF /. TECH & INNOVATION */}
                  {/* START EDITOR'S PICKS */}
                  {/* <div className="panel_inner mb-0">
                    <div className="panel_header">
                      <h4>
                        <strong>EDITOR'S</strong> PICKS
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="#" className="d-block mb-3">
                          <img
                            src="assets/images/340x215-4.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                        <h5>
                          <a href="#">
                            Donec scelerisque massa quis ante facilisis, non
                            pulvinar.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">EUROPE</span>
                          </li>
                          <li>Jan 4, 2021</li>
                        </ul>
                        <p>
                          To understand the new politics stance and other pro
                          nationals of recent…
                        </p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="#">
                            Nam at dui ac arcu suscipit sodales eu non urna.
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="#">
                            Phasellus non odio facilisis, tincidunt mi a, commodo
                            magna.
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="#">
                            Pellentesque volutpat nibh ut lectus euismod
                            ullamcorper.
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                  {/* END OF /. EDITOR'S PICKS */}
                </StickyBox>
              </div>
              {/* <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content"> */}
                {/* <StickyBox> */}
                  {/* START POST CATEGORY STYLE FOUR (Latest articles ) */}
                  {/* <div className="post-inner">
                    <div className="post-head">
                      <h2 className="title">
                        <strong>Latest</strong> articles
                      </h2>
                    </div>
                    <div className="post-body">
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="#" className="thumb">
                            <img
                              src="assets/images/218x150-1.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="#" className="title">
                              There are many variations of passages of Lorem Ipsum
                              available, but the majority have
                            </a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">TECH</span>
                            </li>
                            <li>
                              By <span className="editor-name">John Doe</span>
                            </li>
                            <li>Aug 16, 2023</li>
                          </ul>
                          <p className="d-lg-block d-none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                          </p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="#" className="thumb">
                            <img
                              src="assets/images/218x150-2.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="#" className="title">
                              Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece
                            </a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Business</span>
                            </li>
                            <li>
                              By <span className="editor-name">John Doe</span>
                            </li>
                            <li>Aug 16, 2023</li>
                          </ul>
                          <p className="d-lg-block d-none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                          </p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="#" className="thumb">
                            <img
                              src="assets/images/218x150-3.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="#" className="title">
                              The standard chunk of Lorem Ipsum used since the 1500s
                              is reproduced below for those interested.
                            </a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Travel</span>
                            </li>
                            <li>
                              By <span className="editor-name">John Doe</span>
                            </li>
                            <li>Aug 16, 2023</li>
                          </ul>
                          <p className="d-lg-block d-none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                          </p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="#" className="thumb">
                            <img
                              src="assets/images/218x150-4.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="#" className="title">
                              It is a long established fact that a reader will be
                              distracted by the readable{" "}
                            </a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Fashion</span>
                            </li>
                            <li>
                              By <span className="editor-name">John Doe</span>
                            </li>
                            <li>Aug 16, 2023</li>
                          </ul>
                          <p className="d-lg-block d-none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                          </p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="#" className="thumb">
                            <img
                              src="assets/images/218x150-5.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="#" className="title">
                              Replication For Dummies 4 Easy Steps To Professional
                              DVD
                            </a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">NATIONAL</span>
                            </li>
                            <li>
                              By <span className="editor-name">John Doe</span>
                            </li>
                            <li>Aug 16, 2023</li>
                          </ul>
                          <p className="d-lg-block d-none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                  </div> */}
                {/* </StickyBox> */}
              {/* </div> */}
              <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
                <StickyBox>
                  {/* START ARCHIVE */}
                  {/* <div className="archive-wrapper">
                    <DatePickerComponents />
                  </div> */}
                  {/* END OF /. ARCHIVE */}
                  {/* START POLL WIDGET */}
                  <PollWidget />
                  {/* END OF /. POLL WIDGET */}
                  {/* START TAGS */}
                  {/* <Tags /> */}
                  {/* END OF /. TAGS */}
                </StickyBox>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* *** END OF /. PAGE MAIN CONTENT *** */}

    </Layout>

  )
}
