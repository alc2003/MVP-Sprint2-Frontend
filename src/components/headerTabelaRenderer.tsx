import React from "react";

export default function HeaderTabelaRenderer({colunas}: { colunas: string[] }) {
    return (
        <>
            {
                colunas.map((coluna, index) => {
                    return (
                        <th key={coluna}>
                            {coluna}
                        </th>
                    );
                })
            }
            <th>
                Ações
            </th>
        </>
    )
}


