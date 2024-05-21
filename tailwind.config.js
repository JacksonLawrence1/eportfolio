/** @type {import('tailwindcss').Config} */
import {
	black as _black,
	gray as _gray,
	green as _green,
	red as _red,
	white as _white
} from 'tailwindcss/colors';

export const content = ['./src/**/*.{svelte,html,js,ts}'];
export const theme = {
	colors: {
		primary: {
			50: '#fbfee8',
			100: '#f7ffc2',
			200: '#f3ff87',
			300: '#f4ff43',
			400: '#fdff03',
			500: '#efe703',
			600: '#ceb700',
			700: '#a48404',
			800: '#88670b',
			900: '#735410',
			950: '#432d05'
		},
		secondary: {
			50: '#f5f4fe',
			100: '#edeafd',
			200: '#ddd9fb',
			300: '#c4baf8',
			400: '#a693f2',
			500: '#8867eb',
			600: '#7747e0',
			700: '#5f2fbd',
			800: '#562bac',
			900: '#49258d',
			950: '#2c165f'
		},
		accent: {
			50: '#FFE4E0',
			100: '#FFC6BD',
			200: '#FF8C7A',
			300: '#FF573D',
			400: '#FA2100',
			500: '#B81800',
			600: '#941400',
			700: '#700F00',
			800: '#470A00',
			900: '#240500',
			950: '#140300'
		},
		neutral: {
			50: '#f7f6f5',
			100: '#edebe7',
			200: '#d9d6cf',
			300: '#c0baae',
			400: '#a89e8f',
			500: '#968a79',
			600: '#897a6d',
			700: '#73665b',
			800: '#5f554d',
			900: '#4e4640',
			950: '#292421'
		},
		base: {
			50: '#E1EAF9',
			100: '#C4D4F3',
			200: '#88A9E7',
			300: '#497CDA',
			400: '#2558B6',
			500: '#193B7A',
			600: '#142F61',
			700: '#0F2348',
			800: '#0A1933',
			900: '#050C19',
			950: '#03060D'
		},
		'bright-purple': '#5f2fbd',
		black: _black,
		gray: _gray,
		green: _green,
		red: _red,
		white: _white
	}
};
export const plugins = [];
