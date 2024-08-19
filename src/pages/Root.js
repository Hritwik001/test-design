import { useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import TabsHorizontalVertical2 from "../components/TabsHorizontalVertical2";
import FrameComponent2 from "../components/FrameComponent2";
import NotificationPanelBase2 from "../components/NotificationPanelBase2";

const Root = () => {
  const navigate = useNavigate();

  const onTabsHorizontalVerticalClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTabsHorizontalVerticalClick1 = useCallback(() => {
    navigate("/operations");
  }, [navigate]);

  return (
    <div className="w-[942px] relative flex flex-col items-start justify-start gap-10 leading-[normal] tracking-[normal] h-auto z-[1] hover:flex hover:w-[942px] hover:h-auto hover:flex-col gap-10 hover:items-start hover:justify-start hover:leading-[normal] hover:tracking-[normal] gap-5">
      <section className="w-[660px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[18px] max-w-full h-auto [transform:rotate(0deg)] z-[unset] text-left text-13xl text-black font-nds-typography-library-body-text-small hover:flex hover:w-[660px] hover:h-auto hover:flex-col gap-[18px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pl-0 hover:pr-5 hover:box-border hover:max-w-full">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0 flex gap-0 hover:flex hover:w-6 hover:h-6 gap-0"
          loading="lazy"
          alt=""
          src="/keyboard-backspace.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px] w-auto h-auto [transform:rotate(0deg)] z-[unset] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-[11px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <a className="[text-decoration:none] self-stretch relative tracking-[-1px] leading-[39px] text-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-13xl hover:tracking-[-1px] hover:leading-[39px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px] mq900:text-7xl mq900:leading-[31px]">
            One Manhattan West Overview
          </a>
          <div className="w-[214px] relative text-base tracking-[-0.2px] leading-[20px] text-darkgray flex h-auto hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-left hover:text-darkgray hover:flex hover:w-[214px] hover:h-auto">
            <b>Last Updated:</b>
            <span className="font-light"> 10 Minutes Ago</span>
          </div>
        </div>
      </section>
      <FrameComponent1
        scorePointer="/vector.svg"
        significant="Average "
        propBackgroundColor="#ffdc73"
        propMinWidth3="unset"
        propColor="#4d2000"
        scoreOptionsPadding="4px 30px"
        scoreOptionsPosition="unset"
        scoreOptionsTop="unset"
        scoreOptionsLeft="unset"
        significantFontSize="14px"
        scoreOptionsAlignSelf="unset"
        significantFlex="unset"
        significantDisplay="flex"
        scoreOptionsWidth="113px"
        significantHeight="auto"
        significantWidth="53px"
      />
      <section className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[342px] box-border [row-gap:20px] w-auto h-auto gap-0 text-left text-lg text-nds-colors-library-primary-main-grey600 font-nds-typography-library-body-text-small hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-0 hover:items-start hover:justify-start hover:py-0 hover:pl-0 hover:pr-[342px] hover:box-border hover:[row-gap:20px] mq700:pr-[171px] mq700:box-border">
        <div
          className="h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] cursor-pointer hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150]"
          onClick={onTabsHorizontalVerticalClick}
        >
          <div className="self-stretch h-2 rounded-t rounded-b-none bg-nds-refresh-neutrals-00white overflow-hidden shrink-0 flex w-auto flex-col gap-6 items-start justify-center hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-2 hover:flex-col gap-6 hover:items-start hover:justify-center hover:rounded-t hover:rounded-b-none hover:shrink-0" />
          <div className="self-stretch h-[72px] flex flex-col items-center justify-center py-0 px-0 box-border gap-6 shrink-0 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[72px] hover:flex-col gap-6 hover:items-center hover:justify-center hover:py-0 hover:px-0 hover:box-border hover:shrink-0">
            <div className="w-[175px] flex flex-row items-center justify-start py-0 px-5 box-border gap-2 h-auto hover:flex hover:w-[175px] hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-0 hover:px-5 hover:box-border">
              <img
                className="h-6 w-6 relative min-h-[24] flex hover:flex hover:w-6 hover:h-6 hover:min-h-[24]"
                loading="lazy"
                alt=""
                src="/ic-demography-24px.svg"
              />
              <div className="flex-1 relative leading-[22px] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-lg hover:leading-[22px] hover:text-left hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:flex-1 hover:h-auto">
                INSURANCE
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-start w-auto gap-2 text-xs text-nds-refresh-neutrals-800 font-nexus-theme-title-medium hover:flex hover:self-stretch hover:w-auto hover:flex-1 hover:flex-row gap-2 hover:items-center hover:justify-start">
              <div className="self-stretch flex-1 relative leading-[24px] font-medium flex h-auto hover:font-medium hover:font-nexus-theme-title-medium hover:text-xs hover:leading-[24px] hover:text-left hover:text-nds-refresh-neutrals-800 hover:flex hover:flex-1 hover:h-auto" />
            </div>
          </div>
        </div>
        <TabsHorizontalVertical2 vector="/vector-11.svg" />
        <div
          className="h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-t-[1px] border-solid border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] cursor-pointer hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150]"
          onClick={onTabsHorizontalVerticalClick1}
        >
          <div className="self-stretch h-2 rounded-t rounded-b-none bg-nds-refresh-neutrals-00white overflow-hidden shrink-0 flex w-auto flex-col gap-6 items-start justify-center hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-2 hover:flex-col gap-6 hover:items-start hover:justify-center hover:rounded-t hover:rounded-b-none hover:shrink-0" />
          <div className="self-stretch h-[70px] flex flex-col items-center justify-center py-0 px-0 box-border gap-6 shrink-0 w-auto hover:flex hover:self-stretch hover:w-auto hover:h-[70px] hover:flex-col gap-6 hover:items-center hover:justify-center hover:py-0 hover:px-0 hover:box-border hover:shrink-0">
            <div className="w-[178px] flex flex-row items-center justify-start py-0 px-5 box-border gap-2 h-auto hover:flex hover:w-[178px] hover:h-auto hover:flex-row gap-2 hover:items-center hover:justify-start hover:py-0 hover:px-5 hover:box-border">
              <img
                className="h-[17.5px] w-[17.5px] relative bg-nds-colors-library-primary-main-grey600 flex hover:bg-nds-colors-library-primary-main-grey600 hover:flex hover:w-[17.5px] hover:h-[17.5px]"
                loading="lazy"
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
      </section>
      <section className="self-stretch flex flex-col items-start justify-start w-auto h-auto gap-6 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-6 hover:items-start hover:justify-start">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-10 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-10 hover:items-start hover:justify-start gap-5">
          <FrameComponent2
            title="Energy"
            prop="43"
            significant="Poor"
            propBackgroundColor="#ff7e61"
            propMinWidth3="30"
            propColor="#4f1200"
            scoreOptionsPadding="4px 43px"
            scoreOptionsPosition="unset"
            scoreOptionsTop="unset"
            scoreOptionsLeft="unset"
            significantFontSize="14px"
            propWidth1="unset"
            propMinWidth4="unset"
            buttonsPadding="8px 74px"
            buttonsGap="10px"
            labelFontSize="16px"
            scoreOptionsAlignSelf="unset"
            significantFlex="unset"
            significantDisplay="flex"
            buttonsFlex="1"
            labelFlex="1"
            labelDisplay="flex"
            scoreOptionsWidth="auto"
            scoreOptionsHeight="auto"
            significantHeight="auto"
            significantWidth="auto"
          />
          <FrameComponent2
            propPadding="0px 0px 0px 0px"
            title="Water  "
            propWidth="116px"
            propPadding1="10px 29px"
            propAlignSelf="unset"
            prop="65"
            propMinWidth="57"
            propDisplay="flex"
            propFlex="unset"
            significant="Below Average"
            propBackgroundColor="#ffbe8f"
            propMinWidth3="unset"
            propColor="#4d2000"
            scoreOptionsPadding="4px 12px"
            scoreOptionsPosition="unset"
            scoreOptionsTop="unset"
            scoreOptionsLeft="unset"
            significantFontSize="14px"
            propWidth1="unset"
            propMinWidth4="unset"
            buttonsPadding="8px 74px"
            buttonsGap="10px"
            labelFontSize="16px"
            scoreOptionsAlignSelf="stretch"
            significantFlex="1"
            significantDisplay="flex"
            buttonsFlex="1"
            labelFlex="1"
            labelDisplay="flex"
            scoreOptionsWidth="auto"
            scoreOptionsHeight="auto"
            significantHeight="auto"
            significantWidth="unset"
          />
          <FrameComponent2
            propPadding="unset"
            title="Waste "
            propWidth="116px"
            propPadding1="10px 29px"
            propAlignSelf="unset"
            prop="58"
            propMinWidth="58"
            propDisplay="flex"
            propFlex="unset"
            significant="Below Average"
            propBackgroundColor="#ffbe8f"
            propMinWidth3="unset"
            propColor="#4d2000"
            scoreOptionsPadding="4px 12px"
            scoreOptionsPosition="unset"
            scoreOptionsTop="unset"
            scoreOptionsLeft="unset"
            significantFontSize="14px"
            propWidth1="unset"
            propMinWidth4="unset"
            buttonsPadding="8px 74px"
            buttonsGap="10px"
            labelFontSize="16px"
            scoreOptionsAlignSelf="stretch"
            significantFlex="1"
            significantDisplay="flex"
            buttonsFlex="1"
            labelFlex="1"
            labelDisplay="flex"
            scoreOptionsWidth="auto"
            scoreOptionsHeight="auto"
            significantHeight="auto"
            significantWidth="unset"
          />
        </div>
      </section>
      <section className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-start p-6 box-border max-w-full w-auto h-auto gap-0 text-left text-5xl text-black font-nds-typography-library-body-text-small hover:bg-whitesmoke hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:rounded-lg hover:p-6 hover:box-border hover:max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="self-stretch bg-nds-refresh-neutrals-00white overflow-hidden flex flex-row items-center justify-start p-4 box-border max-w-full w-auto h-auto gap-4 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start hover:p-4 hover:box-border hover:max-w-full">
          <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 h-auto hover:flex hover:flex-1 hover:h-auto hover:flex-row gap-5 hover:items-center hover:justify-between hover:max-w-full mq450:flex-wrap">
            <div className="w-[90px] flex flex-col items-start justify-center gap-1 h-auto hover:flex hover:w-[90px] hover:h-auto hover:flex-col gap-1 hover:items-start hover:justify-center">
              <a className="[text-decoration:none] w-[85px] relative tracking-[-0.5px] leading-[29px] text-[inherit] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:w-[85px] hover:h-auto mq450:text-lgi mq450:leading-[23px]">
                Insights
              </a>
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
        <NotificationPanelBase2
          highEnergyConsumptionAfter="High Energy Consumption After Hours"
          yesterday0800AM="Yesterday, 08:00 AM"
          increasedEnergyUseOutsideOf="Increased energy use outside of normal range detected may indicate equipment running outside parameters.  "
          buttonsPadding="8px 23px"
          buttonsGap="10px"
          labelWidth="unset"
          labelFontSize="16px"
          labelMinWidth="unset"
          buttonsWidth="138px"
          labelFlex="1"
          labelDisplay="flex"
          buttonsBackgroundColor="transparent"
          buttonsHeight="auto"
          labelHeight="auto"
        />
        <NotificationPanelBase2
          highEnergyConsumptionAfter="Simultaneous Heating and Cooling"
          propWidth="726px"
          yesterday0800AM="Today, 08:00 AM"
          propWidth1="104px"
          increasedEnergyUseOutsideOf="Zone heating and cooling simultaneously running may indicate unnecessary energy usage.   "
          buttonsPadding="8px 23px"
          buttonsGap="10px"
          labelWidth="unset"
          labelFontSize="16px"
          labelMinWidth="unset"
          buttonsWidth="138px"
          labelFlex="1"
          labelDisplay="flex"
          buttonsBackgroundColor="transparent"
          buttonsHeight="auto"
          labelHeight="auto"
        />
      </section>
    </div>
  );
};

export default Root;
