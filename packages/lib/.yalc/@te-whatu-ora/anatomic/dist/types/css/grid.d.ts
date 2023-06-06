import { StyleRule } from '@vanilla-extract/css';
import { ColumnLength } from '../components/Columns/Column';
export declare const MAX_COLS = 12;
export declare const mobileContainer: StyleRule;
export declare const tabletContainer: StyleRule;
export declare const mobileRow: StyleRule;
export declare const tabletRow: (cols?: ColumnLength) => StyleRule;
