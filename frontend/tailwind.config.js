import plugin from "@tailwindcss/typography";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.200"),
                        a: { color: theme("colors.blue.400") },


                        p: { marginTop: "0.5em", marginBottom: "0.5em" },
                        h1: { marginTop: "1em", marginBottom: "0.5em", color: theme("colors.white") },
                        h2: { marginTop: "0.8em", marginBottom: "0.4em", color: theme("colors.white") },
                        h3: { marginTop: "0.6em", marginBottom: "0.3em", color: theme("colors.white") },


                        ul: { marginTop: "0.4em", marginBottom: "0.4em" },
                        ol: { marginTop: "0.4em", marginBottom: "0.4em" },


                        pre: {
                            color: theme("colors.gray.100"),
                            fontSize: "0.85em",
                            borderRadius: "0.5rem",
                            overflowX: "auto",
                            lineHeight: "1.6",
                            padding: "0",
                            margin: "0",
                        },

                        "pre code": {
                            display: "block",
                            backgroundColor: "transparent",
                            padding: "1rem",
                            color: theme("colors.gray.100"),
                            fontFamily: "monospace",
                            fontSize: "0.85em",
                            lineHeight: "1.6",
                        },


                        code: {
                            backgroundColor: theme("colors.gray.800"),
                            color: theme("colors.gray.100"),
                            fontSize: "0.85em",
                            fontFamily: "monospace",
                            borderRadius: "0.25rem",
                            whiteSpace: "pre-wrap",
                            padding: "0.2em 0.4em",
                        },

                        'code:not(pre code)': {
                            backgroundColor: theme("colors.gray.800"),
                            color: theme("colors.gray.100"),
                            borderRadius: "0.25rem",
                            padding: "0.2em 0.4em",
                        },
                        'code::before': { content: '""' },
                        'code::after': { content: '""' },


                        table: {
                            width: "100%",
                            tableLayout: "auto",
                            fontSize: "0.9em",
                            borderCollapse: "collapse",
                        },
                        "thead th": {
                            borderBottom: `1px solid ${theme("colors.gray.700")}`,
                            color: theme("colors.gray.100"),
                            padding: "0.5rem",
                            textAlign: "left",
                        },
                        "tbody td": {
                            borderTop: `1px solid ${theme("colors.gray.800")}`,
                            padding: "0.5rem",
                            color: theme("colors.gray.200"),
                        },
                    },
                },
            }),
        },
    },
    plugins: [plugin],
};
