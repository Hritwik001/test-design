import { useCallback } from "react";
import Header from "../components/Header";
import ScoreOptions from "../components/ScoreOptions";
import { useNavigate } from "react-router-dom";

const Insurance = () => {
  const navigate = useNavigate();

  const onKeyboardBackspaceIconClick = useCallback(() => {

  }, []);

  const onTabsHorizontalVerticalClick = useCallback(() => {
    navigate("/esg");
  }, [navigate]);

  const onTabsHorizontalVerticalClick1 = useCallback(() => {
    navigate("/operations");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {

  }, []);

  const onButtonsContainerClick = useCallback(() => {

  }, []);

  const onFrameContainerClick1 = useCallback(() => {

  }, []);

  return (
    <div className="w-[1024px] relative shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-48 box-border gap-5 leading-[normal] tracking-[normal] h-auto hover:bg-whitesmoke hover:flex hover:w-[1024px] hover:h-auto hover:flex-col gap-5 hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-48 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:leading-[normal] hover:tracking-[normal]">
      <img
        className="w-[1024px] h-[1248px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0 bg-nds-refresh-neutrals-00white flex border-main-grey-200 border-[1px] border-solid box-border hover:bg-nds-refresh-neutrals-00white hover:flex hover:w-[1024px] hover:h-[1248px] hover:border-main-grey-200 hover:border-[1px] hover:border-solid hover:box-border"
        alt=""
        src="/union.svg"
      />
      <Header domusIqBlack1="/domus-iqblack-1.svg" />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-[41px] box-border max-w-full w-auto h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-[41px] hover:box-border hover:max-w-full">
        <section className="h-[1575px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[534px] box-border relative gap-10 max-w-full text-left text-5xl text-black font-nds-typography-library-body-text-small hover:flex hover:flex-1 hover:h-[1575px] hover:flex-col gap-10 hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-[534px] hover:box-border hover:max-w-full gap-5 mq975:h-auto mq975:pb-[226px] mq975:box-border mq450:pb-[147px] mq450:box-border">
          <div className="w-6 flex flex-col items-start justify-start gap-4 shrink-0 h-auto z-[unset] text-13xl text-black hover:flex hover:w-6 hover:h-auto hover:flex-col gap-4 hover:items-start hover:justify-start hover:shrink-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 flex gap-0 cursor-pointer hover:flex hover:w-6 hover:h-6 gap-0"
              loading="lazy"
              alt=""
              src="/keyboard-backspace.svg"
              onClick={onKeyboardBackspaceIconClick}
            />
            <div className="self-stretch flex flex-row items-start justify-start w-auto h-auto gap-2 z-[unset] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start">
              <div className="flex-1 flex flex-row items-start justify-start h-auto gap-10 z-[unset] hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-10 hover:items-start hover:justify-start">
                <div className="flex-1 flex flex-col items-start justify-start gap-2 h-auto z-[unset] hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start pt-0.5 pb-[3px] px-0 box-border w-auto h-auto gap-[587px] z-[unset] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-[587px] hover:items-start hover:justify-start hover:pt-0.5 hover:pb-[3px] hover:px-0 hover:box-border gap-[293px] gap-[147px]">
                    <div className="w-[640px] flex flex-row items-start justify-start shrink-0 max-w-[2667%] h-auto gap-2.5 z-[unset] hover:flex hover:w-[640px] hover:h-auto hover:flex-row gap-2.5 hover:items-start hover:justify-start hover:shrink-0 hover:max-w-[2667%]">
                      <h1 className="m-0 flex-1 relative text-inherit tracking-[-1px] leading-[39px] font-normal font-[inherit] flex max-w-full h-auto hover:font-nds-typography-library-body-text-small hover:text-13xl hover:tracking-[-1px] hover:leading-[39px] hover:text-left hover:text-black hover:flex hover:flex-1 hover:h-auto hover:max-w-full mq975:text-7xl mq975:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                        One Manhattan West Overview
                      </h1>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border w-auto h-auto gap-2 z-[unset] text-base text-darkgray hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start hover:py-0 hover:px-0 hover:box-border">
                    <div className="w-[214px] relative tracking-[-0.2px] leading-[20px] flex shrink-0 h-auto hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-left hover:text-darkgray hover:flex hover:w-[214px] hover:h-auto hover:shrink-0">
                      <b>Last Updated:</b>
                      <span className="font-light"> 10 Minutes Ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full w-auto h-auto gap-6 z-[unset] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-6 hover:items-start hover:justify-start hover:max-w-full">
            <div className="flex-1 shadow-[0px_0px_10px_rgba(42,_63,_77,_0.08)] rounded-lg bg-nds-refresh-neutrals-00white flex flex-col items-start justify-start py-6 px-8 box-border gap-[22px] max-w-full h-auto hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-[22px] hover:items-start hover:justify-start hover:rounded-lg hover:py-6 hover:px-8 hover:box-border hover:shadow-[0px_0px_10px_rgba(42,_63,_77,_0.08)] hover:max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full w-auto h-auto z-[unset] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-6 hover:items-start hover:justify-start hover:max-w-full mq975:flex-wrap">
                <div className="w-[234px] flex flex-col items-start justify-start pt-[86px] px-0 pb-0 box-border min-w-[234] h-auto gap-0 [transform:rotate(0deg)] z-[unset] hover:flex hover:w-[234px] hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[86px] hover:px-0 hover:pb-0 hover:box-border hover:min-w-[234] mq975:flex-1">
                  <div className="self-stretch flex flex-row items-start justify-start w-auto h-auto gap-2 z-[unset] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start">
                    <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:flex-1 hover:h-auto mq450:text-lgi mq450:leading-[23px]">
                      Overall Building Score
                    </h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start py-2 pl-[286px] pr-2 box-border gap-2 min-w-[403] max-w-full h-auto z-[unset] text-29xl hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-start hover:py-2 hover:pl-[286px] hover:pr-2 hover:box-border hover:min-w-[403] hover:max-w-full mq700:pl-[143px] mq700:box-border mq700:min-w-full mq450:pl-5 mq450:box-border">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full w-auto h-auto z-[unset] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:items-start hover:justify-start hover:max-w-full">
                    <div className="h-[163px] flex-1 relative max-w-full flex gap-0 items-start justify-start [transform:rotate(0deg)] z-[unset] hover:flex hover:flex-1 hover:h-[163px] gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq975:flex-1">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full flex hover:flex hover:w-full hover:h-full"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                      <div className="absolute top-[58.5px] left-[106px] flex flex-col items-start justify-start gap-1 w-auto [align-self:unset] h-auto z-[1] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-start">
                        <div className="flex flex-row items-start justify-start py-0 px-5 box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] z-[unset] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-5 hover:box-border">
                          <div className="flex flex-row items-start justify-start p-2.5 box-border w-auto [align-self:unset] h-auto gap-2.5 z-[unset] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-start hover:justify-start hover:p-2.5 hover:box-border">
                            <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[52] w-auto [align-self:unset] h-auto z-[1] hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[52] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                              75
                            </div>
                          </div>
                        </div>
                        <ScoreOptions
                          propBackgroundColor="#ffdc73"
                          significant="Average "
                          propMinWidth="53"
                          propColor="#4d2000"
                          scoreOptionsPadding="4px 30px"
                          scoreOptionsPosition="unset"
                          scoreOptionsTop="unset"
                          scoreOptionsLeft="unset"
                          significantFontSize="14px"
                          scoreOptionsAlignSelf="unset"
                          significantFlex="unset"
                          significantDisplay="flex"
                          scoreOptionsWidth="auto"
                          scoreOptionsHeight="auto"
                          significantHeight="auto"
                          significantWidth="auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-4 w-auto h-auto z-[unset] text-xs text-main-grey-700 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-start hover:justify-start mq450:flex-wrap">
                    <div className="flex-1 relative leading-[14px] flex min-w-[101] h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-left hover:text-main-grey-700 hover:flex hover:flex-1 hover:h-auto hover:min-w-[101]">
                      POOR
                    </div>
                    <div className="flex-1 relative leading-[14px] text-right flex min-w-[101] h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-right hover:text-main-grey-700 hover:flex hover:flex-1 hover:h-auto hover:min-w-[101]">
                      EXCELLENT
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end w-auto h-auto gap-6 z-[unset] text-xs text-nds-colors-library-primary-main-grey600 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-6 hover:items-start hover:justify-end">
                <div className="w-[116px] flex flex-row items-start justify-start gap-1 h-auto z-[unset] hover:flex hover:w-[116px] hover:h-auto hover:flex-row gap-1 hover:items-start hover:justify-start">
                  <div className="flex flex-row items-start justify-start gap-1.5 w-auto [align-self:unset] h-auto z-[unset] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-1.5 hover:items-start hover:justify-start">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-0 [transform:rotate(0deg)] z-[unset] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-px hover:px-0 hover:pb-0 hover:box-border">
                      <div className="relative leading-[14px] flex min-w-[8] w-auto [align-self:unset] h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-left hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[8]">
                        0
                      </div>
                    </div>
                    <div className="h-4 w-4 relative rounded-spacing-space-sm bg-orangered flex hover:bg-orangered hover:flex hover:w-4 hover:h-4 hover:rounded-spacing-space-sm" />
                  </div>
                  <div className="h-4 w-4 rounded bg-chocolate flex flex-row items-center justify-start gap-1.5 hover:bg-chocolate hover:flex hover:w-4 hover:h-4 hover:flex-row gap-1.5 hover:items-center hover:justify-start hover:rounded" />
                  <div className="h-4 w-4 rounded bg-goldenrod flex flex-row items-center justify-start gap-1.5 hover:bg-goldenrod hover:flex hover:w-4 hover:h-4 hover:flex-row gap-1.5 hover:items-center hover:justify-start hover:rounded" />
                  <div className="flex-1 flex flex-row items-start justify-start gap-1.5 h-auto z-[unset] text-right hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-1.5 hover:items-start hover:justify-start">
                    <div className="h-4 w-4 relative rounded-spacing-space-sm bg-lightgreen flex hover:bg-lightgreen hover:flex hover:w-4 hover:h-4 hover:rounded-spacing-space-sm" />
                    <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border h-auto gap-0 [transform:rotate(0deg)] z-[unset] hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-px hover:px-0 hover:pb-0 hover:box-border">
                      <div className="self-stretch relative leading-[14px] flex min-w-[20] w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-right hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:min-w-[20]">
                        100
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[342px] box-border [row-gap:20px] w-auto h-auto gap-0 text-lg text-nds-colors-library-primary-main-grey600 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-0 hover:items-start hover:justify-start hover:py-0 hover:pl-0 hover:pr-[342px] hover:box-border hover:[row-gap:20px] mq700:pr-[85px] mq700:box-border mq975:pr-[171px] mq975:box-border">
            <div className="h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] text-orchid hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150]">
              <div className="self-stretch h-2 rounded-t rounded-b-none bg-orchid overflow-hidden shrink-0 flex w-auto flex-col gap-6 items-start justify-center hover:bg-orchid hover:flex hover:self-stretch hover:w-auto hover:h-2 hover:flex-col gap-6 hover:items-start hover:justify-center hover:rounded-t hover:rounded-b-none hover:shrink-0" />
              <div className="self-stretch h-[72px] flex flex-col items-center justify-center py-0 px-0 box-border gap-6 shrink-0 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[72px] hover:flex-col gap-6 hover:items-center hover:justify-center hover:py-0 hover:px-0 hover:box-border hover:shrink-0">
                <div className="w-[175px] flex flex-row items-center justify-start py-0 px-5 box-border gap-2 h-auto hover:flex hover:w-[175px] hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-0 hover:px-5 hover:box-border">
                  <img
                    className="h-6 w-6 relative min-h-[24] flex hover:flex hover:w-6 hover:h-6 hover:min-h-[24]"
                    loading="lazy"
                    alt=""
                    src="/ic-demography-24px1.svg"
                  />
                  <div className="flex-1 relative leading-[22px] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-orchid hover:flex hover:flex-1 hover:h-auto">
                    INSURANCE
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-start w-auto gap-2 text-xs text-nds-refresh-neutrals-800 font-nexus-theme-title-medium hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-row gap-2 hover:items-center hover:justify-start">
                  <div className="self-stretch flex-1 relative leading-[24px] font-medium flex h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-xs hover:leading-[24px] hover:text-left hover:text-nds-refresh-neutrals-800 hover:flex hover:flex-1 hover:h-auto" />
                </div>
              </div>
            </div>
            <div
              className="h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-t-[1px] border-solid border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] cursor-pointer hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150]"
              onClick={onTabsHorizontalVerticalClick}
            >
              <div className="self-stretch h-2 rounded-t rounded-b-none overflow-hidden shrink-0 flex w-auto flex-col gap-6 items-start justify-center hover:flex hover:self-stretch hover:w-auto hover:h-2 hover:flex-col gap-6 hover:items-start hover:justify-center hover:rounded-t hover:rounded-b-none hover:shrink-0" />
              <div className="self-stretch h-[70px] flex flex-col items-center justify-center py-0 px-0 box-border gap-6 shrink-0 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[70px] hover:flex-col gap-6 hover:items-center hover:justify-center hover:py-0 hover:px-0 hover:box-border hover:shrink-0">
                <div className="self-stretch flex flex-row items-center justify-start py-0 px-[15px] box-border gap-2 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-0 hover:px-[15px] hover:box-border">
                  <img
                    className="h-4 w-4 relative bg-slategray flex hover:bg-slategray hover:flex hover:w-4 hover:h-4"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="flex-1 relative leading-[22px] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:flex-1 hover:h-auto">
                    SUSTAINABILITY
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-start w-auto gap-2 text-xs text-nds-refresh-neutrals-400 font-nexus-theme-title-medium hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-row gap-2 hover:items-center hover:justify-start">
                  <div className="self-stretch flex-1 relative leading-[24px] font-medium flex h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-xs hover:leading-[24px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:flex-1 hover:h-auto" />
                </div>
              </div>
            </div>
            <div
              className="h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-t-[1px] border-solid border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] cursor-pointer hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150]"
              onClick={onTabsHorizontalVerticalClick1}
            >
              <div className="self-stretch h-2 rounded-t rounded-b-none bg-nds-refresh-neutrals-00white overflow-hidden shrink-0 flex w-auto flex-col gap-6 items-start justify-center hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-2 hover:flex-col gap-6 hover:items-start hover:justify-center hover:rounded-t hover:rounded-b-none hover:shrink-0" />
              <div className="self-stretch h-[70px] flex flex-col items-center justify-center py-0 px-0 box-border gap-6 shrink-0 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[70px] hover:flex-col gap-6 hover:items-center hover:justify-center hover:py-0 hover:px-0 hover:box-border hover:shrink-0">
                <div className="w-[178px] flex flex-row items-center justify-start py-0 px-5 box-border gap-2 h-auto hover:flex hover:w-[178px] hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-0 hover:px-5 hover:box-border">
                  <img
                    className="h-[17.5px] w-[17.5px] relative bg-nds-colors-library-primary-main-grey600 flex hover:bg-nds-colors-library-primary-main-grey600 hover:flex hover:w-[17.5px] hover:h-[17.5px]"
                    alt=""
                    src="/vector-21.svg"
                  />
                  <div className="flex-1 relative leading-[22px] flex shrink-0 h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:flex-1 hover:h-auto hover:shrink-0">
                    OPERATIONS
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-start w-auto gap-2 text-xs text-nds-refresh-neutrals-400 font-nexus-theme-title-medium hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-row gap-2 hover:items-center hover:justify-start">
                  <div className="self-stretch flex-1 relative leading-[24px] font-medium flex h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-xs hover:leading-[24px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:flex-1 hover:h-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nds-refresh-neutrals-00white flex flex-col items-start justify-start w-auto h-auto gap-6 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-6 hover:items-start hover:justify-start">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-10 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-10 hover:items-start hover:justify-start gap-5">
              <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215]">
                <div className="self-stretch flex flex-row items-center justify-start gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start">
                  <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border">
                    <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                      <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">{`Fire `}</h2>
                    </div>
                  </div>
                  <div className="w-[116px] flex flex-col items-center justify-center gap-1 h-auto text-29xl hover:flex hover:w-[116px] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                    <div className="flex flex-row items-center justify-center py-2.5 px-[31px] box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-[31px] hover:box-border">
                      <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[54] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[54] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                        70
                      </div>
                    </div>
                    <div className="self-stretch rounded-mini bg-primary-accent-orange-300 flex flex-row items-center justify-center py-1 px-3 box-border whitespace-nowrap w-auto h-auto gap-2.5 text-sm text-primary-accent-orange-900 hover:bg-primary-accent-orange-300 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-3 hover:box-border hover:whitespace-nowrap">
                      <div className="flex-1 relative tracking-[-0.15px] leading-[17px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:flex-1 hover:h-auto">
                        Below Average
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 cursor-pointer text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center"
                  onClick={onFrameContainerClick}
                >
                  <div
                    className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 cursor-pointer hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid"
                    onClick={onFrameContainerClick}
                  >
                    <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215]">
                <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start hover:py-0 hover:px-0 hover:box-border">
                  <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border">
                    <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                      <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] whitespace-pre-wrap flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">{`Water  `}</h2>
                    </div>
                  </div>
                  <div className="w-[116px] flex flex-col items-center justify-center gap-1 h-auto text-29xl hover:flex hover:w-[116px] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                    <div className="flex flex-row items-center justify-center py-2.5 px-8 box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-8 hover:box-border">
                      <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[52] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[52] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                        75
                      </div>
                    </div>
                    <div className="self-stretch rounded-mini bg-primary-accent-orange-300 flex flex-row items-center justify-center py-1 px-3 box-border whitespace-nowrap w-auto h-auto gap-2.5 text-sm text-primary-accent-orange-900 hover:bg-primary-accent-orange-300 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-3 hover:box-border hover:whitespace-nowrap">
                      <div className="flex-1 relative tracking-[-0.15px] leading-[17px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:flex-1 hover:h-auto">
                        Below Average
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center">
                  <div
                    className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 cursor-pointer hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid"
                    onClick={onButtonsContainerClick}
                  >
                    <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[215] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[215]">
                <div className="self-stretch flex flex-row items-center justify-start gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start">
                  <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border">
                    <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                      <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">{`Health `}</h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 w-auto [align-self:unset] h-auto text-29xl hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                    <div className="flex flex-row items-center justify-center py-2.5 px-8 box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-8 hover:box-border">
                      <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[59] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[59] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                        90
                      </div>
                    </div>
                    <div className="rounded-mini bg-secondary-colors-success-green-200 flex flex-row items-center justify-center py-1 px-[33px] box-border w-auto [align-self:unset] h-auto gap-2.5 text-sm text-secondary-colors-success-green-900 hover:bg-secondary-colors-success-green-200 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-[33px] hover:box-border">
                      <div className="relative tracking-[-0.15px] leading-[17px] font-light flex min-w-[56] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-secondary-colors-success-green-900 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[56]">
                        Excellent
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-row items-center justify-center w-auto [align-self:unset] h-auto gap-4 cursor-pointer text-center text-base text-gray-200 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center"
                  onClick={onFrameContainerClick1}
                >
                  <div className="rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[76px] w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[76px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                    <div className="w-[86px] relative tracking-[-0.2px] leading-[20px] font-light flex min-w-[86] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:w-[86px] hover:h-auto hover:min-w-[86]">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nds-refresh-neutrals-00white flex flex-row items-start justify-start py-0 pl-0 pr-[327px] box-border gap-10 w-auto h-auto hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-10 hover:items-start hover:justify-start hover:py-0 hover:pl-0 hover:pr-[327px] hover:box-border mq700:flex-wrap gap-5 mq700:p-5 mq700:box-border mq975:pr-[163px] mq975:box-border">
            <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[187] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[187]">
              <div className="self-stretch flex flex-row items-center justify-start gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border min-w-[70] h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border hover:min-w-[70]">
                  <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                    <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">{`Security `}</h2>
                  </div>
                </div>
                <div className="w-[116px] flex flex-col items-center justify-center gap-1 h-auto text-29xl hover:flex hover:w-[116px] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                  <div className="flex flex-row items-center justify-center py-2.5 px-[29px] box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-[29px] hover:box-border">
                    <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[58] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[58] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                      85
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-secondary-colors-warning-yellow-300 flex flex-row items-center justify-center py-1 px-8 box-border w-auto h-auto gap-2.5 text-sm text-primary-accent-orange-900 hover:bg-secondary-colors-warning-yellow-300 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-8 hover:box-border">
                    <div className="flex-1 relative tracking-[-0.15px] leading-[17px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:flex-1 hover:h-auto">
                      Average
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center">
                <div className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                  <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                    View Details
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] rounded-xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4 min-w-[187] h-auto hover:bg-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-center hover:justify-start hover:rounded-xl hover:p-6 hover:box-border hover:shadow-[0px_2px_4px_rgba(35,_35,_47,_0.06),_0px_6px_12px_rgba(35,_35,_47,_0.08)] hover:min-w-[187]">
              <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border gap-4 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start hover:py-0 hover:px-0 hover:box-border mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start py-5 px-0 box-border min-w-[70] h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-5 hover:px-0 hover:box-border hover:min-w-[70]">
                  <div className="flex-1 flex flex-col items-start justify-center h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-center">
                    <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">{`Asset `}</h2>
                  </div>
                </div>
                <div className="w-[116px] flex flex-col items-center justify-center gap-1 h-auto text-29xl hover:flex hover:w-[116px] hover:h-auto hover:flex-col gap-1 hover:items-center hover:justify-center">
                  <div className="flex flex-row items-center justify-center py-2.5 px-[31px] box-border w-auto [align-self:unset] h-auto gap-2.5 hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:py-2.5 hover:px-[31px] hover:box-border">
                    <div className="relative tracking-[-1.5px] leading-[48px] font-light flex min-w-[54] w-auto [align-self:unset] h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-29xl hover:tracking-[-1.5px] hover:leading-[48px] hover:text-left hover:text-black hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[54] mq975:text-19xl mq975:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
                      70
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-secondary-colors-warning-yellow-300 flex flex-row items-center justify-center py-1 px-8 box-border w-auto h-auto gap-2.5 text-sm text-primary-accent-orange-900 hover:bg-secondary-colors-warning-yellow-300 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-mini hover:py-1 hover:px-8 hover:box-border">
                    <div className="flex-1 relative tracking-[-0.15px] leading-[17px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-primary-accent-orange-900 hover:flex hover:flex-1 hover:h-auto">
                      Average
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center w-auto h-auto gap-4 text-center text-base text-gray-200 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-center">
                <div className="flex-1 rounded-sm border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 px-[74px] h-auto gap-2.5 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[74px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                  <div className="flex-1 relative tracking-[-0.2px] leading-[20px] font-light flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                    View Details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-start pt-6 px-6 pb-[5px] box-border max-w-full shrink-0 w-auto h-auto gap-0 text-lg text-nds-refresh-neutrals-500 hover:bg-whitesmoke hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:rounded-lg hover:pt-6 hover:px-6 hover:pb-[5px] hover:box-border hover:max-w-full hover:shrink-0">
            <div className="self-stretch bg-nds-refresh-neutrals-00white overflow-hidden flex flex-row items-center justify-start p-4 box-border max-w-full w-auto h-auto gap-4 text-5xl text-black hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start hover:p-4 hover:box-border hover:max-w-full">
              <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-5 hover:items-center hover:justify-between hover:max-w-full mq450:flex-wrap">
                <div className="w-[90px] flex flex-col items-start justify-center gap-1 h-auto hover:flex hover:w-[90px] hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-center">
                  <h2 className="m-0 w-[85px] relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:w-[85px] hover:h-auto mq450:text-lgi mq450:leading-[23px]">
                    Insights
                  </h2>
                  <div className="self-stretch relative text-sm tracking-[-0.5px] leading-[17px] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[17px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto">
                    Priority Events
                  </div>
                </div>
                <div className="rounded overflow-hidden flex flex-row items-center justify-center w-auto [align-self:unset] h-auto gap-1 text-base text-steelblue font-nexus-theme-title-medium hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row gap-1 hover:items-center hover:justify-center hover:rounded">
                  <div className="relative leading-[24px] font-medium flex min-w-[82] w-auto [align-self:unset] h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-base hover:leading-[24px] hover:text-left hover:text-steelblue hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:min-w-[82]">
                    Dismiss all
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-hidden flex flex-col items-start justify-center p-4 box-border min-h-[48] max-w-full w-auto h-auto gap-0 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48] hover:max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-end gap-4 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-start hover:justify-end hover:max-w-full">
                <img
                  className="h-6 w-6 relative flex hover:flex hover:w-6 hover:h-6"
                  alt=""
                  src="/ic-demography-24px1.svg"
                />
                <div className="flex-1 flex flex-row flex-wrap items-center justify-end min-w-[534] max-w-full h-auto gap-4 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end hover:min-w-[534] hover:max-w-full mq975:min-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[200] max-w-full h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200] hover:max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-start hover:justify-start hover:max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-start hover:max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-0 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-between hover:[row-gap:20px] hover:max-w-full mq975:flex-wrap">
                          <div className="w-[694px] relative leading-[22px] flex max-w-full h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:w-[694px] hover:h-auto hover:max-w-full">
                            Fire Detection System Alarm Muted
                          </div>
                          <div className="w-32 relative text-sm tracking-[-0.5px] leading-[17px] text-gray-100 flex whitespace-nowrap h-auto hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[17px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap">
                            Yesterday, 08:00 AM
                          </div>
                        </div>
                        <div className="self-stretch relative text-sm tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 whitespace-pre-wrap flex w-auto h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:self-stretch hover:w-auto hover:h-auto">
                          Year to date, there have been 6 incidents resulting in
                          48 hrs of increased Fire Suppression risk.
                        </div>
                      </div>
                      <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-2 px-[23px] bg-[transparent] w-[138px] rounded-sm box-border flex flex-row items-center justify-center h-auto gap-2.5 hover:flex hover:w-[138px] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                        <div className="flex-1 relative text-base tracking-[-0.2px] leading-[20px] font-light font-nds-typography-library-body-text-small text-gray-200 text-center flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                          View Details
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-hidden flex flex-col items-start justify-center p-4 box-border min-h-[48] max-w-full w-auto h-auto gap-0 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48] hover:max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-end gap-4 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-start hover:justify-end hover:max-w-full">
                <img
                  className="h-6 w-6 relative flex hover:flex hover:w-6 hover:h-6"
                  alt=""
                  src="/ic-demography-24px1.svg"
                />
                <div className="flex-1 flex flex-row flex-wrap items-center justify-end min-w-[534] max-w-full h-auto gap-4 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end hover:min-w-[534] hover:max-w-full mq975:min-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[200] max-w-full h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200] hover:max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-start hover:justify-start hover:max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-start hover:max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-0 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-between hover:[row-gap:20px] hover:max-w-full mq975:flex-wrap">
                          <div className="w-[694px] relative leading-[22px] flex max-w-full h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:w-[694px] hover:h-auto hover:max-w-full">
                            Fire Suppression System Fault
                          </div>
                          <div className="w-32 relative text-sm tracking-[-0.5px] leading-[17px] text-gray-100 flex whitespace-nowrap h-auto hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[17px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap">
                            Yesterday, 08:00 AM
                          </div>
                        </div>
                        <div className="self-stretch relative text-sm tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 flex w-auto h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:self-stretch hover:w-auto hover:h-auto">
                          Year to date, there have been 4 system fault events
                          resulting in 288 hrs of increased Fire Suppression
                          risk.
                        </div>
                      </div>
                      <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-2 px-[23px] bg-[transparent] w-[138px] rounded-sm box-border flex flex-row items-center justify-center h-auto gap-2.5 hover:flex hover:w-[138px] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                        <div className="flex-1 relative text-base tracking-[-0.2px] leading-[20px] font-light font-nds-typography-library-body-text-small text-gray-200 text-center flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                          View Details
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-hidden flex flex-col items-start justify-center p-4 box-border min-h-[48] max-w-full w-auto h-auto gap-0 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48] hover:max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-end gap-4 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-start hover:justify-end hover:max-w-full">
                <img
                  className="h-6 w-6 relative flex hover:flex hover:w-6 hover:h-6"
                  alt=""
                  src="/ic-demography-24px1.svg"
                />
                <div className="flex-1 flex flex-row flex-wrap items-center justify-end min-w-[534] max-w-full h-auto gap-4 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end hover:min-w-[534] hover:max-w-full mq975:min-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[200] max-w-full h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200] hover:max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-start hover:justify-start hover:max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-start hover:max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-0 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-between hover:[row-gap:20px] hover:max-w-full mq975:flex-wrap">
                          <div className="w-[694px] relative leading-[22px] flex max-w-full h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:w-[694px] hover:h-auto hover:max-w-full">
                            Increase Water Risk Freezing Condition
                          </div>
                          <div className="w-32 relative text-sm tracking-[-0.5px] leading-[17px] text-gray-100 flex whitespace-nowrap h-auto hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[17px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap">
                            Yesterday, 08:00 AM
                          </div>
                        </div>
                        <div className="self-stretch h-auto relative text-sm tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 flex w-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:self-stretch hover:w-auto hover:h-auto">{`Freezing conditions are expected within the next 5 hours. Please ensure proper flow is maintained in pipes to mitigate risk of freezing pipes. `}</div>
                      </div>
                      <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-2 px-[23px] bg-[transparent] w-[138px] rounded-sm box-border flex flex-row items-center justify-center h-auto gap-2.5 hover:flex hover:w-[138px] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                        <div className="flex-1 relative text-base tracking-[-0.2px] leading-[20px] font-light font-nds-typography-library-body-text-small text-gray-200 text-center flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                          View Details
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_0px_0px_1px_#e7ecf0] bg-nds-refresh-neutrals-00white overflow-hidden flex flex-col items-start justify-center p-4 box-border min-h-[48] max-w-full w-auto h-auto gap-0 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-center hover:p-4 hover:box-border hover:shadow-[0px_0px_0px_1px_#e7ecf0] hover:min-h-[48] hover:max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-end gap-4 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-start hover:justify-end hover:max-w-full">
                <img
                  className="h-6 w-6 relative flex hover:flex hover:w-6 hover:h-6"
                  alt=""
                  src="/ic-demography-24px1.svg"
                />
                <div className="flex-1 flex flex-row flex-wrap items-center justify-end min-w-[534] max-w-full h-auto gap-4 hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:flex-wrap gap-4 hover:items-center hover:justify-end hover:min-w-[534] hover:max-w-full mq975:min-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[200] max-w-full h-auto gap-2 hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-2 hover:items-start hover:justify-start hover:min-w-[200] hover:max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-4 hover:items-start hover:justify-start hover:max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-start hover:max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-0 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-between hover:[row-gap:20px] hover:max-w-full mq975:flex-wrap">
                          <div className="w-[694px] relative leading-[22px] flex max-w-full h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-refresh-neutrals-500 hover:flex hover:w-[694px] hover:h-auto hover:max-w-full">
                            Lock Failure Alert
                          </div>
                          <div className="w-32 relative text-sm tracking-[-0.5px] leading-[17px] text-gray-100 flex whitespace-nowrap h-auto hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.5px] hover:leading-[17px] hover:text-left hover:text-gray-100 hover:flex hover:w-32 hover:h-auto hover:whitespace-nowrap">
                            Yesterday, 08:00 AM
                          </div>
                        </div>
                        <div className="self-stretch relative text-sm tracking-[-0.15px] leading-[17px] font-light text-nds-refresh-neutrals-400 flex w-auto h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-sm hover:tracking-[-0.15px] hover:leading-[17px] hover:text-left hover:text-nds-refresh-neutrals-400 hover:flex hover:self-stretch hover:w-auto hover:h-auto">
                          Year to date shows 4 lock failure alerts resulting in
                          240 hours of increased security risk.
                        </div>
                      </div>
                      <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-2 px-[23px] bg-[transparent] w-[138px] rounded-sm box-border flex flex-row items-center justify-center h-auto gap-2.5 hover:flex hover:w-[138px] hover:h-auto hover:flex-row gap-2.5 hover:items-center hover:justify-center hover:rounded-sm hover:py-2 hover:px-[23px] hover:box-border hover:border-gray-200 hover:border-[1px] hover:border-solid">
                        <div className="flex-1 relative text-base tracking-[-0.2px] leading-[20px] font-light font-nds-typography-library-body-text-small text-gray-200 text-center flex h-auto hover:font-light hover:font-nds-typography-library-body-text-small hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-center hover:text-gray-200 hover:flex hover:flex-1 hover:h-auto">
                          View Details
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[41px] h-10 absolute !m-[0] right-[-20px] bottom-[634px] flex gap-0 items-start justify-start [transform:rotate(0deg)] z-[unset] hover:flex hover:w-[41px] hover:h-10 gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <img
              className="absolute top-[12px] left-[0px] w-6 h-6 flex gap-0 z-[2] hover:flex hover:w-6 hover:h-6 gap-0"
              alt=""
              src="/ic-forum-24px.svg"
            />
            <img
              className="absolute top-[0px] left-[1px] w-10 h-10 flex z-[3] hover:flex hover:w-10 hover:h-10"
              loading="lazy"
              alt=""
              src="/group-626418.svg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Insurance;
