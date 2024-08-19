import { useCallback } from "react";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TabsHorizontalVertical from "./TabsHorizontalVertical";
import TabContentItem from "./TabContentItem";
import NotificationPanelBase from "./NotificationPanelBase";
import NotificationPanelBase1 from "./NotificationPanelBase1";
import PropTypes from "prop-types";

const Root2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onTabsHorizontalVerticalClick = useCallback(() => {
    navigate("/esg");
  }, [navigate]);

  const onTabsHorizontalVerticalClick1 = useCallback(() => {
    navigate("/operations");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Fire Risk" to the project
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    // Please sync "Health Risk - IQ" to the project
  }, []);

  const onKeyboardBackspaceIconClick = useCallback(() => {
    // Please sync "Buildings" to the project
  }, []);

  return (
    <div
      className={`w-[942px] h-[1575px] max-w-full flex flex-col items-start justify-start pt-0 px-0 pb-[534px] box-border gap-10 leading-[normal] tracking-[normal] hover:flex hover:w-[942px] hover:h-[1575px] hover:flex-col gap-10 hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-[534px] hover:box-border hover:leading-[normal] hover:tracking-[normal] mq700:h-auto gap-5 ${className}`}
    >
      <section className="w-[660px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[18px] max-w-full shrink-0 h-auto [transform:rotate(0deg)] text-left text-13xl text-black font-nds-typography-library-body-text-small hover:flex hover:w-[660px] hover:h-auto hover:flex-col gap-[18px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pl-0 hover:pr-5 hover:box-border hover:max-w-full hover:shrink-0">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0 flex gap-0 cursor-pointer hover:flex hover:w-6 hover:h-6 gap-0"
          loading="lazy"
          alt=""
          src="/keyboard-backspace.svg"
          onClick={onKeyboardBackspaceIconClick}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-[11px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[39px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-13xl hover:tracking-[-1px] hover:leading-[39px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px] mq900:text-7xl mq900:leading-[31px]">
            One Manhattan West Overview
          </h1>
          <div className="w-[214px] relative text-base tracking-[-0.2px] leading-[20px] text-darkgray flex h-auto hover:text-base hover:tracking-[-0.2px] hover:leading-[20px] hover:text-left hover:text-darkgray hover:flex hover:w-[214px] hover:h-auto">
            <b>Last Updated:</b>
            <span className="font-light"> 10 Minutes Ago</span>
          </div>
        </div>
      </section>
      <section className="self-stretch shadow-[0px_0px_10px_rgba(42,_63,_77,_0.08)] rounded-lg bg-nds-refresh-neutrals-00white flex flex-row items-start justify-between pt-8 px-8 pb-6 box-border max-w-full shrink-0 gap-5 w-auto h-auto text-left text-5xl text-black font-nds-typography-library-body-text-small hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-5 hover:items-start hover:justify-between hover:rounded-lg hover:pt-8 hover:px-8 hover:pb-6 hover:box-border hover:shadow-[0px_0px_10px_rgba(42,_63,_77,_0.08)] hover:max-w-full hover:shrink-0 mq700:flex-wrap">
        <div className="w-[234px] flex flex-col items-start justify-start pt-[78px] px-0 pb-0 box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:w-[234px] hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[78px] hover:px-0 hover:pb-0 hover:box-border">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[29px] font-normal font-[inherit] flex w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-5xl hover:tracking-[-0.5px] hover:leading-[29px] hover:text-left hover:text-black hover:flex hover:self-stretch hover:w-auto hover:h-auto mq450:text-lgi mq450:leading-[23px]">
            Overall Building Score
          </h2>
        </div>
        <div className="w-[334px] flex flex-col items-start justify-start gap-2 max-w-full h-auto [transform:rotate(0deg)] text-xs text-main-grey-700 hover:flex hover:w-[334px] hover:h-auto hover:flex-col gap-2 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
          <Box
            className="w-[326px] h-[163px] max-w-full flex flex-col gap-3.5 items-start justify-start [transform:rotate(0deg)] pt-[68.5px] px-[106px] pb-[7.5px] box-border hover:flex hover:w-[326px] hover:h-[163px] hover:flex-col gap-3.5 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[68.5px] hover:px-[106px] hover:pb-[7.5px] hover:box-border hover:max-w-full"
            sx={{ width: 326 }}
          >
            <CircularProgress />
          </Box>
          <div className="self-stretch flex flex-row items-start justify-start gap-4 w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq450:flex-wrap">
            <div className="flex-1 relative leading-[14px] flex min-w-[101] h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-left hover:text-main-grey-700 hover:flex hover:flex-1 hover:h-auto hover:min-w-[101]">
              POOR
            </div>
            <div className="h-[60px] flex-1 relative min-w-[106] flex gap-0 items-start justify-start [transform:rotate(0deg)] text-nds-colors-library-primary-main-grey600 hover:flex hover:flex-1 hover:h-[60px] gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[106]">
              <div className="absolute top-[45px] left-[47px] leading-[14px] flex min-w-[8] w-2 h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-left hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:w-2 hover:h-auto hover:min-w-[8]">
                0
              </div>
              <div className="absolute top-[44px] left-[61px] rounded-spacing-space-sm bg-orangered w-4 h-4 flex hover:bg-orangered hover:flex hover:w-4 hover:h-4 hover:rounded-spacing-space-sm" />
              <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-end justify-start gap-[30px] h-full [transform:rotate(0deg)] text-right text-main-grey-700 hover:flex hover:w-full hover:h-full hover:flex-col gap-[30px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-2 box-border w-auto h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-0 hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:pl-0 hover:pr-2 hover:box-border">
                  <div className="flex-1 relative leading-[14px] flex h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-right hover:text-main-grey-700 hover:flex hover:flex-1 hover:h-auto">
                    EXCELLENT
                  </div>
                </div>
                <div className="w-[82px] flex flex-row items-start justify-start gap-[4.67px] h-auto [transform:rotate(0deg)] text-nds-colors-library-primary-main-grey600 hover:flex hover:w-[82px] hover:h-auto hover:flex-row gap-[4.67px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                  <div className="h-4 w-4 rounded bg-chocolate flex flex-row items-center justify-start gap-1.5 hover:bg-chocolate hover:flex hover:w-4 hover:h-4 hover:flex-row gap-1.5 hover:items-center hover:justify-start hover:rounded" />
                  <div className="h-4 w-4 rounded bg-goldenrod flex flex-row items-center justify-start gap-1.5 hover:bg-goldenrod hover:flex hover:w-4 hover:h-4 hover:flex-row gap-1.5 hover:items-center hover:justify-start hover:rounded" />
                  <div className="h-4 w-4 relative rounded-spacing-space-sm bg-lightgreen flex hover:bg-lightgreen hover:flex hover:w-4 hover:h-4 hover:rounded-spacing-space-sm" />
                  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border h-auto gap-0 [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-px hover:px-0 hover:pb-0 hover:box-border">
                    <div className="self-stretch relative leading-[14px] flex min-w-[20] w-auto h-auto hover:font-nds-typography-library-body-text-small hover:text-xs hover:leading-[14px] hover:text-right hover:text-nds-colors-library-primary-main-grey600 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:min-w-[20]">
                      100
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[342px] box-border [row-gap:20px] shrink-0 w-auto h-auto gap-0 text-left text-lg text-orchid font-nds-typography-library-body-text-small hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-0 hover:items-start hover:justify-start hover:py-0 hover:pl-0 hover:pr-[342px] hover:box-border hover:[row-gap:20px] hover:shrink-0 mq700:pr-[171px] mq700:box-border">
        <div className="h-20 flex-1 rounded bg-nds-refresh-neutrals-00white border-nds-refresh-neutrals-50 border-r-[1px] border-solid border-nds-refresh-neutrals-50 border-l-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start gap-6 min-w-[150] hover:bg-nds-refresh-neutrals-00white hover:flex hover:flex-1 hover:h-20 hover:flex-col gap-6 hover:items-start hover:justify-start hover:rounded hover:min-w-[150]">
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
        <TabsHorizontalVertical
          onTabsHorizontalVerticalClick={onTabsHorizontalVerticalClick}
          vector="/vector-1.svg"
          text="SUSTAINABILITY"
        />
        <TabsHorizontalVertical
          onTabsHorizontalVerticalClick={onTabsHorizontalVerticalClick1}
          propBackgroundColor="#fff"
          propAlignSelf="unset"
          vector="/vector-21.svg"
          text="OPERATIONS"
          propDisplay="flex"
          propMinWidth="unset"
          frameDivWidth="178px"
        />
      </section>
      <section className="self-stretch bg-nds-refresh-neutrals-00white flex flex-col items-start justify-start shrink-0 w-auto h-auto gap-6 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-6 hover:items-start hover:justify-start hover:shrink-0">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-10 w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:flex-wrap gap-10 hover:items-start hover:justify-start gap-5">
          <TabContentItem
            title="Fire "
            tabContentScorePlaceholder="70"
            onFrameContainerClick={onFrameContainerClick}
            significant="Below Average"
            propBackgroundColor="#ffbe8f"
            propMinWidth3="unset"
            propColor="#4d2000"
            propWidth1="unset"
            propMinWidth4="unset"
            scoreOptionsPadding="4px 12px"
            scoreOptionsPosition="unset"
            scoreOptionsTop="unset"
            scoreOptionsLeft="unset"
            significantFontSize="14px"
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
          <TabContentItem
            propMinWidth="215"
            propPadding="0px 0px 0px 0px"
            propMinWidth1="unset"
            title="Water  "
            propWidth="116px"
            propAlignSelf="unset"
            tabContentScorePlaceholder="75"
            propDisplay="flex"
            propMinWidth2="52"
            propFlex="unset"
            significant="Below Average"
            propBackgroundColor="#ffbe8f"
            propMinWidth3="unset"
            propColor="#4d2000"
            propWidth1="unset"
            propMinWidth4="unset"
            scoreOptionsPadding="4px 12px"
            scoreOptionsPosition="unset"
            scoreOptionsTop="unset"
            scoreOptionsLeft="unset"
            significantFontSize="14px"
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
          <TabContentItem
            propMinWidth="215"
            propPadding="unset"
            propMinWidth1="unset"
            title="Health "
            propWidth="auto"
            propAlignSelf="unset"
            tabContentScorePlaceholder="90"
            propDisplay="flex"
            propMinWidth2="59"
            propFlex="unset"
            onFrameContainerClick={onFrameContainerClick1}
            significant="Excellent"
            propBackgroundColor="#b3f3af"
            propMinWidth3="56"
            propColor="#04370b"
            propWidth1="86px"
            propMinWidth4="86"
            scoreOptionsPadding="4px 33px"
            scoreOptionsPosition="unset"
            scoreOptionsTop="unset"
            scoreOptionsLeft="unset"
            significantFontSize="14px"
            buttonsPadding="8px 76px"
            buttonsGap="10px"
            labelFontSize="16px"
            scoreOptionsAlignSelf="unset"
            significantFlex="unset"
            significantDisplay="flex"
            buttonsFlex="unset"
            labelFlex="unset"
            labelDisplay="flex"
            scoreOptionsWidth="auto"
            scoreOptionsHeight="auto"
            significantHeight="auto"
            significantWidth="auto"
          />
        </div>
      </section>
      <section className="self-stretch bg-nds-refresh-neutrals-00white flex flex-row items-start justify-start py-0 pl-0 pr-[327px] box-border gap-10 shrink-0 w-auto h-auto hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-10 hover:items-start hover:justify-start hover:py-0 hover:pl-0 hover:pr-[327px] hover:box-border hover:shrink-0 mq700:flex-wrap gap-5 mq700:p-5 mq700:box-border">
        <TabContentItem
          propMinWidth="187"
          propPadding="unset"
          propMinWidth1="70"
          title="Security "
          propWidth="116px"
          propAlignSelf="unset"
          tabContentScorePlaceholder="85"
          propDisplay="flex"
          propMinWidth2="58"
          propFlex="unset"
          significant="Average"
          propBackgroundColor="#ffdc73"
          propMinWidth3="unset"
          propColor="#4d2000"
          propWidth1="unset"
          propMinWidth4="unset"
          scoreOptionsPadding="4px 32px"
          scoreOptionsPosition="unset"
          scoreOptionsTop="unset"
          scoreOptionsLeft="unset"
          significantFontSize="14px"
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
        <TabContentItem
          propMinWidth="187"
          propPadding="0px 0px 0px 0px"
          propMinWidth1="70"
          title="Asset "
          propWidth="116px"
          propAlignSelf="unset"
          tabContentScorePlaceholder="70"
          propDisplay="flex"
          propMinWidth2="54"
          propFlex="unset"
          significant="Average"
        />
      </section>
      <section className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-start pt-6 px-6 pb-[5px] box-border max-w-full shrink-0 w-auto h-auto gap-0 text-left text-5xl text-black font-nds-typography-library-body-text-small hover:bg-whitesmoke hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col gap-0 hover:items-start hover:justify-start hover:rounded-lg hover:pt-6 hover:px-6 hover:pb-[5px] hover:box-border hover:max-w-full hover:shrink-0">
        <div className="self-stretch bg-nds-refresh-neutrals-00white overflow-hidden flex flex-row items-center justify-start p-4 box-border max-w-full w-auto h-auto gap-4 hover:bg-nds-refresh-neutrals-00white hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row gap-4 hover:items-center hover:justify-start hover:p-4 hover:box-border hover:max-w-full">
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
        <NotificationPanelBase
          fireDetectionSystemAlarmMuted="Fire Detection System Alarm Muted"
          yearToDateThereHaveBeenInc="Year to date,  there have been 6 incidents resulting in 48 hrs of increased Fire Suppression risk."
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
        <NotificationPanelBase
          fireDetectionSystemAlarmMuted="Fire Suppression System Fault"
          yearToDateThereHaveBeenInc="Year to date, there have been 4 system fault events resulting in 288 hrs of increased Fire Suppression risk."
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
        <NotificationPanelBase1
          increaseWaterRiskFreezingCondit="Increase Water Risk Freezing Condition"
          freezingConditionsAreExpected="Freezing conditions are expected within the next 5 hours. Please ensure proper flow is maintained in pipes to mitigate risk of freezing pipes. "
          buttonsPadding="8px 23px"
          buttonsGap="10px"
          labelWidth="unset"
          labelFontSize="16px"
          labelMinWidth="unset"
          badgeHeight="18px"
          buttonsWidth="138px"
          labelFlex="1"
          labelDisplay="flex"
          buttonsBackgroundColor="unset"
          buttonsHeight="auto"
          labelHeight="auto"
        />
        <NotificationPanelBase1
          increaseWaterRiskFreezingCondit="Lock Failure Alert"
          freezingConditionsAreExpected="Year to date shows 4 lock failure alerts resulting in 240 hours of increased security risk."
          propHeight="auto"
          propDisplay="flex"
          icDemography24pxIconHeight="24px"
          icDemography24pxIconWidth="24px"
          leadingContentMinWidth="534"
          increaseWaterRiskWidth="694px"
          containerFlexWrap="wrap"
          containerHeight="auto"
          leadingContentHeight="auto"
          skeletonHeight="auto"
          mainContentHeight="auto"
          contentAlignSelf="stretch"
          contentWidth="auto"
          contentHeight="auto"
          tiletimeAlignSelf="stretch"
          tiletimeRowGap="20px"
          tiletimeGap="0px"
          tiletimeWidth="auto"
          tiletimeHeight="auto"
          increaseWaterRiskHeight="auto"
          increaseWaterRiskFlex="unset"
          yesterday0800AMHeight="auto"
          freezingConditionsAreAlignSelf="stretch"
          freezingConditionsAreWidth="auto"
        />
      </section>
    </div>
  );
};

Root2.propTypes = {
  className: PropTypes.string,
};

export default Root2;
