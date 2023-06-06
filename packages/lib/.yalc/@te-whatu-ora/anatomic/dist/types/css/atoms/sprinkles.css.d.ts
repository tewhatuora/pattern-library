import { ConditionalValue, RequiredConditionalValue } from '@vanilla-extract/sprinkles';
import { Breakpoint, breakpointNames } from '../breakpoints';
declare const responsiveAtomicProperties: {
    conditions: {
        defaultCondition: "mobile";
        conditionNames: ("mobile" | "tablet" | "desktop" | "wide")[];
        responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
            length: 4;
        };
    };
    styles: {
        readonly display: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                flex: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                grid: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inlineBlock: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inlineFlex: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly position: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                relative: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                fixed: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                sticky: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly overflow: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                hidden: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                scroll: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                visible: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderBottomWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderLeftWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderRightWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderTopWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderBottomLeftRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderBottomRightRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderTopLeftRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderTopRightRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly top: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly right: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly bottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly left: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly alignItems: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly justifyContent: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                spaceBetween: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexDirection: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                column: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                row: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                rowReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                columnReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexWrap: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                wrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexShrink: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexGrow: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                1: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly textAlign: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                left: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                right: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
    };
} & {
    styles: {
        borderLeftRadius: {
            mappings: ("borderBottomLeftRadius" | "borderTopLeftRadius")[];
        };
        borderRightRadius: {
            mappings: ("borderBottomRightRadius" | "borderTopRightRadius")[];
        };
        borderTopRadius: {
            mappings: ("borderTopLeftRadius" | "borderTopRightRadius")[];
        };
        borderBottomRadius: {
            mappings: ("borderBottomLeftRadius" | "borderBottomRightRadius")[];
        };
        padding: {
            mappings: ("paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft")[];
        };
        paddingY: {
            mappings: ("paddingTop" | "paddingBottom")[];
        };
        paddingX: {
            mappings: ("paddingRight" | "paddingLeft")[];
        };
        margin: {
            mappings: ("marginTop" | "marginBottom" | "marginRight" | "marginLeft")[];
        };
        marginY: {
            mappings: ("marginTop" | "marginBottom")[];
        };
        marginX: {
            mappings: ("marginRight" | "marginLeft")[];
        };
    };
};
export declare const sprinkles: ((props: {
    readonly userSelect?: "none" | undefined;
    readonly outline?: "none" | undefined;
    readonly opacity?: 0 | undefined;
    readonly zIndex?: 0 | 1 | 2 | "sticky" | "dropdownBackdrop" | "dropdown" | "modalBackdrop" | "modal" | "notification" | undefined;
    readonly cursor?: "default" | "pointer" | undefined;
    readonly pointerEvents?: "none" | undefined;
    readonly height?: "full" | undefined;
    readonly width?: "full" | undefined;
    readonly maxWidth?: "full" | undefined;
    readonly minWidth?: 0 | undefined;
    readonly transitionProperty?: "opacity" | "transform" | "all" | "none" | "default" | "colors" | "shadow" | undefined;
    readonly transitionTimingFunction?: "linear" | "in" | "out" | "inOut" | undefined;
    readonly transition?: "fast" | undefined;
    readonly borderStyle?: "none" | "dashed" | "dotted" | "double" | "solid" | undefined;
    readonly borderBottomStyle?: "none" | "dashed" | "dotted" | "double" | "solid" | undefined;
    readonly borderLeftStyle?: "none" | "dashed" | "dotted" | "double" | "solid" | undefined;
    readonly borderRightStyle?: "none" | "dashed" | "dotted" | "double" | "solid" | undefined;
    readonly borderTopStyle?: "none" | "dashed" | "dotted" | "double" | "solid" | undefined;
} & {
    readonly display?: (("flex" | "grid" | "block" | "inline" | "none" | "inlineBlock" | "inlineFlex" | {
        mobile?: "flex" | "grid" | "block" | "inline" | "none" | "inlineBlock" | "inlineFlex" | undefined;
        tablet?: "flex" | "grid" | "block" | "inline" | "none" | "inlineBlock" | "inlineFlex" | undefined;
        desktop?: "flex" | "grid" | "block" | "inline" | "none" | "inlineBlock" | "inlineFlex" | undefined;
        wide?: "flex" | "grid" | "block" | "inline" | "none" | "inlineBlock" | "inlineFlex" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "flex" | "grid" | "block" | "inline" | "none" | "inlineBlock" | "inlineFlex" | null>) | undefined;
    readonly position?: (("relative" | "absolute" | "fixed" | "sticky" | {
        mobile?: "relative" | "absolute" | "fixed" | "sticky" | undefined;
        tablet?: "relative" | "absolute" | "fixed" | "sticky" | undefined;
        desktop?: "relative" | "absolute" | "fixed" | "sticky" | undefined;
        wide?: "relative" | "absolute" | "fixed" | "sticky" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "relative" | "absolute" | "fixed" | "sticky" | null>) | undefined;
    readonly overflow?: (("auto" | "hidden" | "scroll" | "visible" | {
        mobile?: "auto" | "hidden" | "scroll" | "visible" | undefined;
        tablet?: "auto" | "hidden" | "scroll" | "visible" | undefined;
        desktop?: "auto" | "hidden" | "scroll" | "visible" | undefined;
        wide?: "auto" | "hidden" | "scroll" | "visible" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "auto" | "hidden" | "scroll" | "visible" | null>) | undefined;
    readonly borderWidth?: (("xlarge" | "large" | "medium" | "small" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | null>) | undefined;
    readonly borderBottomWidth?: (("xlarge" | "large" | "medium" | "small" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | null>) | undefined;
    readonly borderLeftWidth?: (("xlarge" | "large" | "medium" | "small" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | null>) | undefined;
    readonly borderRightWidth?: (("xlarge" | "large" | "medium" | "small" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | null>) | undefined;
    readonly borderTopWidth?: (("xlarge" | "large" | "medium" | "small" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | null>) | undefined;
    readonly borderRadius?: (("none" | "button" | "full" | "tags" | "inputs" | "standard" | {
        mobile?: "none" | "button" | "full" | "tags" | "inputs" | "standard" | undefined;
        tablet?: "none" | "button" | "full" | "tags" | "inputs" | "standard" | undefined;
        desktop?: "none" | "button" | "full" | "tags" | "inputs" | "standard" | undefined;
        wide?: "none" | "button" | "full" | "tags" | "inputs" | "standard" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "none" | "button" | "full" | "tags" | "inputs" | "standard" | null>) | undefined;
    readonly borderBottomLeftRadius?: (("button" | "tags" | "inputs" | "standard" | {
        mobile?: "button" | "tags" | "inputs" | "standard" | undefined;
        tablet?: "button" | "tags" | "inputs" | "standard" | undefined;
        desktop?: "button" | "tags" | "inputs" | "standard" | undefined;
        wide?: "button" | "tags" | "inputs" | "standard" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "button" | "tags" | "inputs" | "standard" | null>) | undefined;
    readonly borderBottomRightRadius?: (import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "button" | "tags" | "inputs" | "standard" | null> | ("button" | "tags" | "inputs" | "standard" | {
        mobile?: "button" | "tags" | "inputs" | "standard" | undefined;
        tablet?: "button" | "tags" | "inputs" | "standard" | undefined;
        desktop?: "button" | "tags" | "inputs" | "standard" | undefined;
        wide?: "button" | "tags" | "inputs" | "standard" | undefined;
    })) | undefined;
    readonly borderTopLeftRadius?: (import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "button" | "tags" | "inputs" | "standard" | null> | ("button" | "tags" | "inputs" | "standard" | {
        mobile?: "button" | "tags" | "inputs" | "standard" | undefined;
        tablet?: "button" | "tags" | "inputs" | "standard" | undefined;
        desktop?: "button" | "tags" | "inputs" | "standard" | undefined;
        wide?: "button" | "tags" | "inputs" | "standard" | undefined;
    })) | undefined;
    readonly borderTopRightRadius?: (import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "button" | "tags" | "inputs" | "standard" | null> | ("button" | "tags" | "inputs" | "standard" | {
        mobile?: "button" | "tags" | "inputs" | "standard" | undefined;
        tablet?: "button" | "tags" | "inputs" | "standard" | undefined;
        desktop?: "button" | "tags" | "inputs" | "standard" | undefined;
        wide?: "button" | "tags" | "inputs" | "standard" | undefined;
    })) | undefined;
    readonly paddingTop?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly paddingBottom?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly paddingRight?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly paddingLeft?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly marginTop?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly marginBottom?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly marginRight?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly marginLeft?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly top?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly right?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly bottom?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly left?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    readonly alignItems?: (("center" | "flexStart" | "flexEnd" | {
        mobile?: "center" | "flexStart" | "flexEnd" | undefined;
        tablet?: "center" | "flexStart" | "flexEnd" | undefined;
        desktop?: "center" | "flexStart" | "flexEnd" | undefined;
        wide?: "center" | "flexStart" | "flexEnd" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "center" | "flexStart" | "flexEnd" | null>) | undefined;
    readonly justifyContent?: (("center" | "flexStart" | "flexEnd" | "spaceBetween" | {
        mobile?: "center" | "flexStart" | "flexEnd" | "spaceBetween" | undefined;
        tablet?: "center" | "flexStart" | "flexEnd" | "spaceBetween" | undefined;
        desktop?: "center" | "flexStart" | "flexEnd" | "spaceBetween" | undefined;
        wide?: "center" | "flexStart" | "flexEnd" | "spaceBetween" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "center" | "flexStart" | "flexEnd" | "spaceBetween" | null>) | undefined;
    readonly flexDirection?: (("column" | "row" | "rowReverse" | "columnReverse" | {
        mobile?: "column" | "row" | "rowReverse" | "columnReverse" | undefined;
        tablet?: "column" | "row" | "rowReverse" | "columnReverse" | undefined;
        desktop?: "column" | "row" | "rowReverse" | "columnReverse" | undefined;
        wide?: "column" | "row" | "rowReverse" | "columnReverse" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "column" | "row" | "rowReverse" | "columnReverse" | null>) | undefined;
    readonly flexWrap?: (("wrap" | "nowrap" | {
        mobile?: "wrap" | "nowrap" | undefined;
        tablet?: "wrap" | "nowrap" | undefined;
        desktop?: "wrap" | "nowrap" | undefined;
        wide?: "wrap" | "nowrap" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "wrap" | "nowrap" | null>) | undefined;
    readonly flexShrink?: ((0 | {
        mobile?: 0 | undefined;
        tablet?: 0 | undefined;
        desktop?: 0 | undefined;
        wide?: 0 | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, 0 | null>) | undefined;
    readonly flexGrow?: ((0 | 1 | {
        mobile?: 0 | 1 | undefined;
        tablet?: 0 | 1 | undefined;
        desktop?: 0 | 1 | undefined;
        wide?: 0 | 1 | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, 0 | 1 | null>) | undefined;
    readonly textAlign?: (("left" | "right" | "center" | {
        mobile?: "left" | "right" | "center" | undefined;
        tablet?: "left" | "right" | "center" | undefined;
        desktop?: "left" | "right" | "center" | undefined;
        wide?: "left" | "right" | "center" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "left" | "right" | "center" | null>) | undefined;
    borderLeftRadius?: (import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "button" | "tags" | "inputs" | "standard" | null> | ("button" | "tags" | "inputs" | "standard" | {
        mobile?: "button" | "tags" | "inputs" | "standard" | undefined;
        tablet?: "button" | "tags" | "inputs" | "standard" | undefined;
        desktop?: "button" | "tags" | "inputs" | "standard" | undefined;
        wide?: "button" | "tags" | "inputs" | "standard" | undefined;
    })) | undefined;
    borderRightRadius?: (import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "button" | "tags" | "inputs" | "standard" | null> | ("button" | "tags" | "inputs" | "standard" | {
        mobile?: "button" | "tags" | "inputs" | "standard" | undefined;
        tablet?: "button" | "tags" | "inputs" | "standard" | undefined;
        desktop?: "button" | "tags" | "inputs" | "standard" | undefined;
        wide?: "button" | "tags" | "inputs" | "standard" | undefined;
    })) | undefined;
    borderTopRadius?: (import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "button" | "tags" | "inputs" | "standard" | null> | ("button" | "tags" | "inputs" | "standard" | {
        mobile?: "button" | "tags" | "inputs" | "standard" | undefined;
        tablet?: "button" | "tags" | "inputs" | "standard" | undefined;
        desktop?: "button" | "tags" | "inputs" | "standard" | undefined;
        wide?: "button" | "tags" | "inputs" | "standard" | undefined;
    })) | undefined;
    borderBottomRadius?: (import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "button" | "tags" | "inputs" | "standard" | null> | ("button" | "tags" | "inputs" | "standard" | {
        mobile?: "button" | "tags" | "inputs" | "standard" | undefined;
        tablet?: "button" | "tags" | "inputs" | "standard" | undefined;
        desktop?: "button" | "tags" | "inputs" | "standard" | undefined;
        wide?: "button" | "tags" | "inputs" | "standard" | undefined;
    })) | undefined;
    padding?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    paddingY?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    paddingX?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    margin?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    marginY?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
    marginX?: (("xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | {
        mobile?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        tablet?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        desktop?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
        wide?: "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | undefined;
    }) | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, "xlarge" | "large" | "medium" | "small" | "xxlarge" | "xsmall" | null>) | undefined;
} & {
    readonly color?: ("primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | {
        base?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
        active?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
        focus?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
        hover?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
    }) | undefined;
    readonly backgroundColor?: ("primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | {
        base?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
        active?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
        focus?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
        hover?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
    }) | undefined;
    readonly borderColor?: ("primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | {
        base?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
        active?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
        focus?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
        hover?: "primary110" | "primary100" | "primary75" | "primary50" | "primary25" | "primary5" | "primary0" | "secondary110" | "secondary100" | "secondary75" | "secondary50" | "secondary25" | "secondary5" | "secondary0" | "tertiary110" | "tertiary100" | "tertiary75" | "tertiary50" | "tertiary25" | "tertiary5" | "tertiary0" | "neutral100" | "neutral75" | "neutral50" | "neutral25" | "neutral5" | "neutral0" | "positive110" | "positive100" | "positive75" | "positive50" | "positive25" | "positive5" | "positive0" | "info110" | "info100" | "info75" | "info50" | "info25" | "info5" | "info0" | "caution110" | "caution100" | "caution75" | "caution50" | "caution25" | "caution5" | "caution0" | "error110" | "error100" | "error75" | "error50" | "error25" | "error5" | "error0" | "annotation110" | "annotation100" | "annotation75" | "annotation50" | "annotation25" | "annotation5" | "annotation0" | "visited100" | undefined;
    }) | undefined;
} & {
    transitionDuration?: ("500" | "700" | "75" | "100" | "150" | "200" | "300" | "1000" | {
        base?: "500" | "700" | "75" | "100" | "150" | "200" | "300" | "1000" | undefined;
    }) | undefined;
}) => string) & {
    properties: Set<"alignItems" | "backgroundColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStyle" | "borderBottomWidth" | "borderLeftStyle" | "borderLeftWidth" | "borderRightStyle" | "borderRightWidth" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStyle" | "borderTopWidth" | "bottom" | "color" | "cursor" | "display" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxWidth" | "minWidth" | "opacity" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "pointerEvents" | "position" | "right" | "textAlign" | "top" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "userSelect" | "width" | "zIndex" | "borderColor" | "borderRadius" | "borderStyle" | "borderWidth" | "margin" | "outline" | "overflow" | "padding" | "transition" | "borderLeftRadius" | "borderRightRadius" | "borderTopRadius" | "borderBottomRadius" | "paddingY" | "paddingX" | "marginY" | "marginX">;
};
export declare type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<typeof responsiveAtomicProperties, Value>;
export declare type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<typeof responsiveAtomicProperties, Value>;
export declare type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> & Record<typeof breakpointNames[0], Value>;
export declare const normalizeResponsiveValue: <Value extends string | number | boolean>(value: ConditionalValue<{
    conditions: {
        defaultCondition: "mobile";
        conditionNames: ("mobile" | "tablet" | "desktop" | "wide")[];
        responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
            length: 4;
        };
    };
    styles: {
        readonly display: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                flex: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                grid: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inlineBlock: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inlineFlex: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly position: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                relative: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                fixed: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                sticky: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly overflow: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                hidden: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                scroll: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                visible: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderBottomWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderLeftWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderRightWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderTopWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderBottomLeftRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderBottomRightRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderTopLeftRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderTopRightRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly top: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly right: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly bottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly left: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly alignItems: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly justifyContent: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                spaceBetween: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexDirection: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                column: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                row: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                rowReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                columnReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexWrap: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                wrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexShrink: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexGrow: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                1: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly textAlign: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                left: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                right: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
    };
} & {
    styles: {
        borderLeftRadius: {
            mappings: ("borderBottomLeftRadius" | "borderTopLeftRadius")[];
        };
        borderRightRadius: {
            mappings: ("borderBottomRightRadius" | "borderTopRightRadius")[];
        };
        borderTopRadius: {
            mappings: ("borderTopLeftRadius" | "borderTopRightRadius")[];
        };
        borderBottomRadius: {
            mappings: ("borderBottomLeftRadius" | "borderBottomRightRadius")[];
        };
        padding: {
            mappings: ("paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft")[];
        };
        paddingY: {
            mappings: ("paddingTop" | "paddingBottom")[];
        };
        paddingX: {
            mappings: ("paddingRight" | "paddingLeft")[];
        };
        margin: {
            mappings: ("marginTop" | "marginBottom" | "marginRight" | "marginLeft")[];
        };
        marginY: {
            mappings: ("marginTop" | "marginBottom")[];
        };
        marginX: {
            mappings: ("marginRight" | "marginLeft")[];
        };
    };
}, Value>) => Partial<Record<"mobile" | "tablet" | "desktop" | "wide", Value>>;
export declare const mapResponsiveValue: <OutputValue extends string | number | boolean | null | undefined, Value extends ConditionalValue<{
    conditions: {
        defaultCondition: "mobile";
        conditionNames: ("mobile" | "tablet" | "desktop" | "wide")[];
        responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
            length: 4;
        };
    };
    styles: {
        readonly display: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                flex: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                grid: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inlineBlock: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inlineFlex: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly position: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                relative: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                fixed: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                sticky: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly overflow: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                hidden: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                scroll: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                visible: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderBottomWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderLeftWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderRightWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderTopWidth: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderBottomLeftRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderBottomRightRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderTopLeftRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderTopRightRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                button: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                tags: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inputs: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly top: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly right: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly bottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly left: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly alignItems: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly justifyContent: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                spaceBetween: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexDirection: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                column: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                row: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                rowReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                columnReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexWrap: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                wrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexShrink: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexGrow: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                1: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly textAlign: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                left: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                right: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
    };
} & {
    styles: {
        borderLeftRadius: {
            mappings: ("borderBottomLeftRadius" | "borderTopLeftRadius")[];
        };
        borderRightRadius: {
            mappings: ("borderBottomRightRadius" | "borderTopRightRadius")[];
        };
        borderTopRadius: {
            mappings: ("borderTopLeftRadius" | "borderTopRightRadius")[];
        };
        borderBottomRadius: {
            mappings: ("borderBottomLeftRadius" | "borderBottomRightRadius")[];
        };
        padding: {
            mappings: ("paddingTop" | "paddingBottom" | "paddingRight" | "paddingLeft")[];
        };
        paddingY: {
            mappings: ("paddingTop" | "paddingBottom")[];
        };
        paddingX: {
            mappings: ("paddingRight" | "paddingLeft")[];
        };
        margin: {
            mappings: ("marginTop" | "marginBottom" | "marginRight" | "marginLeft")[];
        };
        marginY: {
            mappings: ("marginTop" | "marginBottom")[];
        };
        marginX: {
            mappings: ("marginRight" | "marginLeft")[];
        };
    };
}, string | number | boolean>>(value: Value, fn: (inputValue: Value extends import("@vanilla-extract/sprinkles").ResponsiveArray<1, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3 | 5, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3 | 5 | 6, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3 | 5 | 6 | 7, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<4 | 1 | 2 | 3 | 5 | 6 | 7 | 8, string | number | boolean | null> ? NonNullable<Value[number]> : Value extends Partial<Record<string, string | number | boolean>> ? NonNullable<Value[keyof Value]> : Value, key: "mobile" | "tablet" | "desktop" | "wide") => OutputValue) => Value extends string | number | boolean ? OutputValue : Partial<Record<"mobile" | "tablet" | "desktop" | "wide", OutputValue>>;
export {};
