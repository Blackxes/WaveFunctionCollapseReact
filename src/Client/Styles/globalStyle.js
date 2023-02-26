/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Jul 06 2022
 * @Email blackxes.dev@gmail.com
 */

import { ApplicationWidth } from "./definitions";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	:root {
		--app-max-width: ${ApplicationWidth};
		
		--color-primary: #fff;
		--color-secondary: #141414;
		--color-action-frontground: #6473ff;
		--color-action-background: transparent;
		--color-action-accent: #6473ff;
		--color-accent: pink;

		--color-error: ${({ colorError }) => colorError};
		--color-success: ${({ colorSuccess }) => colorSuccess};
		--color-warning: ${({ colorWarning }) => colorWarning};
		--color-info: ${({ colorInfo }) => colorInfo};
	 
		--font-family: ${({ fontFamily }) => fontFamily};
		--font-size: ${({ fontSize }) => fontSize};
		--font-size-base: ${({ fontSizeBase }) => fontSizeBase};
		--font-color: ${({ colorFont }) => colorFont};
		--line-height: ${({ lineHeight }) => lineHeight}
	}
 
	* { box-sizing: border-box; }
	html { height: 100%; }
	body { margin: 0; padding: 0; min-height: 100vh; background: var(--color-primary);
		font-family: "Roboto"; font-size: 20px;
		color: #000; line-height: 1.4;
		overflow-x: hidden;
	}

	p, span, label { margin: 0 0 20px 0; padding: 0; font-size: var(--font-size);
		&:last-child:not(.margin) { margin-bottom: 0; }
	}
	h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
		margin: 0 auto 20px 0; padding: 0; display: block; letter-spacing: 1px;
		font-weight: 600; width: 100%;
	}
	.h1, h1 { font-size: 2em; text-align: center; }
	.h2, h2 { font-size: 1.67em; margin-bottom: 12px; }
	.h3, h3 { font-size: 1.17em; margin-bottom: 16px; }
	.h4, h4 { font-size: 1.145m; }
	.h5, h5 { font-size: 1.1em; }
	.h6, h6 { font-size: 1em; }

	ul, li { margin: 0; padding: 0; list-style-type: none; }

	a { color: var(--color-action-accent); }


	label, textarea, select, button, .button { margin-bottom: 10px; transition: all 0.1s ease-in-out; }

	input:last-child, label:last-child, textarea:last-child, select:last-child,
	button:last-child, .button:last-child { margin-bottom: 0; }

	label, form label > *:not(a) { display: block; width: 100%; }
	input[type="text"], textarea, select { padding: 6px 12px; border-radius: 0; border: 1px solid #aaa;
		width: 100%; box-sizing: border-box; box-sizing: border-box;
	}
	select { padding-top: 5px; padding-bottom: 5px; }

	input:active, input:focus, input:focus-visible, textarea:active,
	textarea:focus, textarea:focus-visible, select:active, select:focus {
		outline: none; border-color: inherit; border-radius: 0;
	}

	textarea { font-size: 1em; line-height: 1.2; }
	form datalist { display: none; }

	input.alert { border: 1px solid #f00; }

	input[required]:placeholder-shown, select[required]:placeholder-shown,
	textarea[required]:placeholder-shown { border-color: #f00; }

	[disabled] { opacity: 0.8; filter: brightness(0.7); }

	label > * { margin-top: 5px; }
	form label { margin-bottom: 20px;
		&:hover { cursor: pointer; }
	}

	input, select, button, textarea {
		margin: 0;
		padding: 8px 12px;
		border: 1px solid var(--color-accent);
		outline: none;
		font-family: var(--font-family);
		font-size: var(--font-size);
		background: #fff;
		color: #111;
		&:focus { border-color: #6473ff; }
		&:hover { cursor: pointer; }
	}
	select {
		padding-top: ${(props) => `calc(${props.inputPaddingVertical} - 2px)`};
		padding-bottom: ${(props) => `calc(${props.inputPaddingVertical} - 2px)`};
	}

	button, .button { border-radius: 3px; }

	label > * { margin-top: 8px; }

	hr { border: none; border-bottom: 1px solid #fff; width: 100%; }

	img { display: block; }

	#app { min-height: inherit; }

	::-webkit-scrollbar { width: 10px; }
	::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0); }
	::-webkit-scrollbar-thumb { background: #19fff4; }

	@media print {
		p, span, label, legend { color: #000 !important; }
		hr { background-color: #000 !important; }
		fieldset { border-color: #000 !important; }
	}
`;
