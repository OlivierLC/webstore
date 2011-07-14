<?php
header('Content-type: application/xml');
echo '<?xml version="1.0" encoding="utf-8" ?>';
?>

<!--
 * FCKeditor - The text editor for Internet - http://www.fckeditor.net
 * Copyright (C) 2003-2008 Frederico Caldeira Knabben
 *
 * == BEGIN LICENSE ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 *
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 *
 * == END LICENSE ==
 *
 * This is the sample style definitions file. It makes the styles combo
 * completely customizable.
 *
 * See FCKConfig.StylesXmlPath in the configuration file.
-->
<Styles>

	<!-- Block Styles -->

	<!--
	# These styles are already available in the "Format" combo, so they are not
	# needed here by default.

	<Style name="Heading 1" element="h1" />
	<Style name="Heading 2" element="h2" />
	<Style name="Heading 3" element="h3" />
	<Style name="Heading 4" element="h4" />
	<Style name="Heading 5" element="h5" />
	<Style name="Heading 6" element="h6" />
	<Style name="Paragraph" element="p" />
	<Style name="Document Block" element="div" />
	<Style name="Preformatted Text" element="pre" />
	<Style name="Address" element="address" />
	-->

	<!-- Inline Styles -->

	<!--
	# These are core styles available as toolbar buttons.

	<Style name="Bold" element="b">
		<Override element="strong" />
	</Style>
	<Style name="Italic" element="i">
		<Override element="em" />
	</Style>
	<Style name="Underline" element="u" />
	<Style name="Strikethrough" element="strike" />
	<Style name="Subscript" element="sub" />
	<Style name="Superscript" element="sup" />
	-->

	<Style name="Marker: Yellow" element="span">
		<Style name="background-color" value="Yellow" />
	</Style>
	<Style name="Marker: Green" element="span">
		<Style name="background-color" value="Lime" />
	</Style>

	<Style name="Big" element="big" />
	<Style name="Small" element="small" />
	<Style name="Typewriter" element="tt" />

	<Style name="Computer Code" element="code" />
	<Style name="Keyboard Phrase" element="kbd" />
	<Style name="Sample Text" element="samp" />
	<Style name="Variable" element="var" />

	<Style name="Deleted Text" element="del" />
	<Style name="Inserted Text" element="ins" />

	<Style name="Cited Work" element="cite" />
	<Style name="Inline Quotation" element="q" />

	<Style name="Language: RTL" element="span">
		<Attribute name="dir" value="rtl" />
	</Style>
	<Style name="Language: LTR" element="span">
		<Attribute name="dir" value="ltr" />
	</Style>
	<Style name="Language: RTL Strong" element="bdo">
		<Attribute name="dir" value="rtl" />
	</Style>
	<Style name="Language: LTR Strong" element="bdo">
		<Attribute name="dir" value="ltr" />
	</Style>

	<!-- Object Styles -->

	<Style name="Image on Left" element="img">
		<Attribute name="style" value="padding: 5px; margin-right: 5px" />
		<Attribute name="border" value="2" />
		<Attribute name="align" value="left" />
	</Style>
	<Style name="Image on Right" element="img">
		<Attribute name="style" value="padding: 5px; margin-left: 5px" />
		<Attribute name="border" value="2" />
		<Attribute name="align" value="right" />
	</Style>
</Styles>
