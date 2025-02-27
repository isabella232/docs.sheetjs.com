---
sidebar_position: 1
---

# File Formats

![circo graph of format support](../img/formats.png)

![graph legend](../img/legend.png)


| Format                                                       | Read  | Write |
|:-------------------------------------------------------------|:-----:|:-----:|
| **Excel Worksheet/Workbook Formats**                         |:-----:|:-----:|
| Excel 2007+ XML Formats (XLSX/XLSM)                          |   ✔   |   ✔   |
| Excel 2007+ Binary Format (XLSB BIFF12)                      |   ✔   |   ✔   |
| Excel 2003-2004 XML Format (XML "SpreadsheetML")             |   ✔   |   ✔   |
| Excel 97-2004 (XLS BIFF8)                                    |   ✔   |   ✔   |
| Excel 5.0/95 (XLS BIFF5)                                     |   ✔   |   ✔   |
| Excel 4.0 (XLS/XLW BIFF4)                                    |   ✔   |   ✔   |
| Excel 3.0 (XLS BIFF3)                                        |   ✔   |   ✔   |
| Excel 2.0/2.1 / Multiplan 4.x DOS (XLS BIFF2)                |   ✔   |   ✔   |
| **Excel Supported Text Formats**                             |:-----:|:-----:|
| Delimiter-Separated Values (CSV/TXT)                         |   ✔   |   ✔   |
| Data Interchange Format (DIF)                                |   ✔   |   ✔   |
| Symbolic Link (SYLK/SLK)                                     |   ✔   |   ✔   |
| Lotus Formatted Text (PRN)                                   |   ✔   |   ✔   |
| UTF-16 Unicode Text (TXT)                                    |   ✔   |   ✔   |
| **Other Workbook/Worksheet Formats**                         |:-----:|:-----:|
| Numbers 3.0+ / iWork 2013+ Spreadsheet (NUMBERS)             |   ✔   |   ✔   |
| OpenDocument Spreadsheet (ODS)                               |   ✔   |   ✔   |
| Flat XML ODF Spreadsheet (FODS)                              |   ✔   |   ✔   |
| Uniform Office Format Spreadsheet (标文通 UOS1/UOS2)         |   ✔   |       |
| dBASE II/III/IV / Visual FoxPro (DBF)                        |   ✔   |   ✔   |
| Lotus 1-2-3 (WK1/WK3)                                        |   ✔   |   ✔   |
| Lotus 1-2-3 (WKS/WK2/WK4/123)                                |   ✔   |       |
| Quattro Pro Spreadsheet (WQ1/WQ2/WB1/WB2/WB3/QPW)            |   ✔   |       |
| Works 1.x-3.x DOS / 2.x-5.x Windows Spreadsheet (WKS)        |   ✔   |       |
| Works 6.x-9.x Spreadsheet (XLR)                              |   ✔   |       |
| **Other Common Spreadsheet Output Formats**                  |:-----:|:-----:|
| HTML Tables                                                  |   ✔   |   ✔   |
| Rich Text Format tables (RTF)                                |       |   ✔   |
| Ethercalc Record Format (ETH)                                |   ✔   |   ✔   |

Features not supported by a given file format will not be written.  Formats with
range limits will be silently truncated:

| Format                                    | Last Cell  | Max Cols | Max Rows |
|:------------------------------------------|:-----------|---------:|---------:|
| Excel 2007+ XML Formats (XLSX/XLSM)       | XFD1048576 |    16384 |  1048576 |
| Excel 2007+ Binary Format (XLSB BIFF12)   | XFD1048576 |    16384 |  1048576 |
| Numbers 12.0 (NUMBERS)                    | ALL1000000 |     1000 |  1000000 |
| Quattro Pro 9+ (QPW)                      | IV1000000  |      256 |  1000000 |
| Excel 97-2004 (XLS BIFF8)                 | IV65536    |      256 |    65536 |
| Excel 5.0/95 (XLS BIFF5)                  | IV16384    |      256 |    16384 |
| Excel 4.0 (XLS BIFF4)                     | IV16384    |      256 |    16384 |
| Excel 3.0 (XLS BIFF3)                     | IV16384    |      256 |    16384 |
| Excel 2.0/2.1 (XLS BIFF2)                 | IV16384    |      256 |    16384 |
| Lotus 1-2-3 R2 - R5 (WK1/WK3/WK4)         | IV8192     |      256 |     8192 |
| Lotus 1-2-3 R1 (WKS)                      | IV2048     |      256 |     2048 |

Excel 2003 SpreadsheetML range limits are governed by the version of Excel and
are not enforced by the writer.

### Excel 2007+ XML (XLSX/XLSM)

XLSX and XLSM files are ZIP containers containing a series of XML files in
accordance with the Open Packaging Conventions (OPC).  The XLSM format, almost
identical to XLSX, is used for files containing macros.

The format is standardized in ECMA-376 and later in ISO/IEC 29500.  Excel does
not follow the specification, and there are additional documents discussing how
Excel deviates from the specification.

### Excel 2.0-95 (BIFF2/BIFF3/BIFF4/BIFF5)

BIFF 2/3 XLS are single-sheet streams of binary records.  Excel 4 introduced
the concept of a workbook (`XLW` files) but also had single-sheet `XLS` format.
The structure is largely similar to the Lotus 1-2-3 file formats.  BIFF5/8/12
extended the format in various ways but largely stuck to the same record format.

Multiplan 4 "Normal" files are identical in structure to BIFF2 and use the same
cell value records.  There are some different record types for more advanced
features like Print Settings.  The BIFF2 writer generates files that can be read
in Multiplan 4 and the parser can extract values from "Normal" files.

There is no official specification for any of these formats.  Excel 95 can write
files in these formats, so record lengths and fields were determined by writing
in all of the supported formats and comparing files.  Excel 2016 can generate
BIFF5 files, enabling a full suite of file tests starting from XLSX or BIFF2.

### Excel 97-2004 Binary (BIFF8)

BIFF8 exclusively uses the Compound File Binary container format, splitting some
content into streams within the file.  At its core, it still uses an extended
version of the binary record format from older versions of BIFF.

The `MS-XLS` specification covers the basics of the file format, and other
specifications expand on serialization of features like properties.

### Excel 2003-2004 (SpreadsheetML)

Predating XLSX, SpreadsheetML files are simple XML files.  There is no official
and comprehensive specification, although MS has released documentation on the
format.  Since Excel 2016 can generate SpreadsheetML files, mapping features is
pretty straightforward.

### Excel 2007+ Binary (XLSB, BIFF12)

Introduced in parallel with XLSX, the XLSB format combines the BIFF architecture
with the content separation and ZIP container of XLSX.  For the most part nodes
in an XLSX sub-file can be mapped to XLSB records in a corresponding sub-file.

The `MS-XLSB` specification covers the basics of the file format, and other
specifications expand on serialization of features like properties.

### Delimiter-Separated Values (CSV/TXT)

Excel CSV deviates from RFC4180 in a number of important ways.  The generated
CSV files should generally work in Excel although they may not work in RFC4180
compatible readers.  The parser should generally understand Excel CSV. The
writer proactively generates cells for formulae if values are unavailable.

Excel TXT uses tab as the delimiter and code page 1200.

Like in Excel, files starting with `0x49 0x44 ("ID")` are treated as Symbolic
Link files.  Unlike Excel, if the file does not have a valid SYLK header, it
will be proactively reinterpreted as CSV.  There are some files with semicolon
delimiter that align with a valid SYLK file.  For the broadest compatibility,
all cells with the value of `ID` are automatically wrapped in double-quotes.

### Miscellaneous Workbook Formats

Support for other formats is generally far behind XLS/XLSB/XLSX support, due in
part to a lack of publicly available documentation.  Test files were produced in
the respective apps and compared to their XLS exports to determine structure.
The main focus is data extraction.

#### Lotus 1-2-3 (WKS/WK1/WK2/WK3/WK4/123)

The Lotus formats consist of binary records similar to the BIFF structure. Lotus
did release a specification decades ago covering the original WK1 format.  Other
features were deduced by producing files and comparing to Excel support.

Generated WK1 worksheets are compatible with Lotus 1-2-3 R2 and Excel 5.0.

Generated WK3 workbooks are compatible with Lotus 1-2-3 R9 and Excel 5.0.

#### Quattro Pro (WQ1/WQ2/WB1/WB2/WB3/QPW)

The Quattro Pro formats use binary records in the same way as BIFF and Lotus.
Some of the newer formats (namely WB3 and QPW) use a CFB enclosure just like
BIFF8 XLS.

#### Works for DOS / Windows Spreadsheet (WKS/XLR)

All versions of Works were limited to a single worksheet.

Works for DOS 1.x - 3.x and Works for Windows 2.x extends the Lotus WKS format
with additional record types.

Works for Windows 3.x - 5.x uses the same format and WKS extension.  The BOF
record has type `FF`

Works for Windows 6.x - 9.x use the XLR format.  XLR is nearly identical to
BIFF8 XLS: it uses the CFB container with a Workbook stream.  Works 9 saves the
exact Workbook stream for the XLR and the 97-2003 XLS export.  Works 6 XLS
includes two empty worksheets but the main worksheet has an identical encoding.
XLR also includes a `WksSSWorkBook` stream similar to Lotus FM3/FMT files.

#### Numbers 3.0+ / iWork 2013+ Spreadsheet (NUMBERS)

iWork 2013 (Numbers 3.0 / Pages 5.0 / Keynote 6.0) switched from a proprietary
XML-based format to the current file format based on the iWork Archive (IWA).
This format has been used up through the current release (Numbers 11.2).

The parser focuses on extracting raw data from tables.  Numbers technically
supports multiple tables in a logical worksheet, including custom titles.  This
parser will generate one worksheet per Numbers table.

The writer currently exports a small range from the first worksheet.

#### OpenDocument Spreadsheet (ODS/FODS)

ODS is an XML-in-ZIP format akin to XLSX while FODS is an XML format akin to
SpreadsheetML.  Both are detailed in the OASIS standard, but tools like LO/OO
add undocumented extensions.  The parsers and writers do not implement the full
standard, instead focusing on parts necessary to extract and store raw data.

#### Uniform Office Spreadsheet (UOS1/2)

UOS is a very similar format, and it comes in 2 varieties corresponding to ODS
and FODS respectively.  For the most part, the difference between the formats
is in the names of tags and attributes.

### Miscellaneous Worksheet Formats

Many older formats supported only one worksheet:

#### dBASE and Visual FoxPro (DBF)

DBF is really a typed table format: each column can only hold one data type and
each record omits type information.  The parser generates a header row and
inserts records starting at the second row of the worksheet.  The writer makes
files compatible with Visual FoxPro extensions.

Multi-file extensions like external memos and tables are currently unsupported,
limited by the general ability to read arbitrary files in the web browser.  The
reader understands DBF Level 7 extensions like DATETIME.

#### Symbolic Link (SYLK)

<https://oss.sheetjs.com/notes/sylk/> is an informal specification based on our
experimentation and previous documentation efforts.

#### Lotus Formatted Text (PRN)

There is no real documentation, and in fact Excel treats PRN as an output-only
file format.  Nevertheless we can guess the column widths and reverse-engineer
the original layout.  Excel's 240 character width limitation is not enforced.

#### Data Interchange Format (DIF)

There is no unified definition.  Visicalc DIF differs from Lotus DIF, and both
differ from Excel DIF.  Where ambiguous, the parser/writer follows the expected
behavior from Excel.  In particular, Excel extends DIF in incompatible ways:

- Since Excel automatically converts numbers-as-strings to numbers, numeric
  string constants are converted to formulae: `"0.3" -> "=""0.3""`
- DIF technically expects numeric cells to hold the raw numeric data, but Excel
  permits formatted numbers (including dates)
- DIF technically has no support for formulae, but Excel will automatically
  convert plain formulae.  Array formulae are not preserved.

#### HTML

Excel HTML worksheets include special metadata encoded in styles.  For example,
`mso-number-format` is a localized string containing the number format.  Despite
the metadata the output is valid HTML, although it does accept bare `&` symbols.

The writer adds type metadata to the TD elements via the `t` tag.  The parser
looks for those tags and overrides the default interpretation. For example, text
like `<td>12345</td>` will be parsed as numbers but `<td t="s">12345</td>` will
be parsed as text.

#### Rich Text Format (RTF)

Excel RTF worksheets are stored in clipboard when copying cells or ranges from a
worksheet.  The supported codes are a subset of the Word RTF support.

#### Ethercalc Record Format (ETH)

[Ethercalc](https://ethercalc.net/) is an open source web spreadsheet powered by
a record format reminiscent of SYLK wrapped in a MIME multi-part message.

