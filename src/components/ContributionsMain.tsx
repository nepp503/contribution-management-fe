import * as React from 'react';
import { useAsyncMethod } from '../hooks/useAsyncMethod';
import { deleteContribution, getContribution, getContributionByUser, updateContribution } from '../api/contributionApi';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useState } from 'react';
import { Close, Create, GetApp } from '@mui/icons-material';
import { Contribution } from '../api/generated';

export const ContributionsMain: React.FC = () => {
    const [contributionId, setContributionId] = useState<number|null>(null)
    const [userId, setUserId] = useState<number|null>(null)
    const [contributions, setContributions] = useState<Contribution[]>([]) 

    const {run: runGetContribution} = useAsyncMethod(getContribution)
    const {run: runGetContributionByUser} = useAsyncMethod(getContributionByUser)
    const {run: runUpdateContribution} = useAsyncMethod(updateContribution)
    const {run: runDeleteContribution} = useAsyncMethod(deleteContribution)

    const getContributionById = React.useCallback(async () => {
        if (contributionId) {
            const result = (await runGetContribution({id: contributionId})).data
            if (result) {
                setContributions(new Array(result))
            }
        }
    }, [runGetContribution, setContributions, contributionId])

    const getContributionByUserId = React.useCallback(async () => {
        if (userId) {
            const result = (await runGetContributionByUser({userId: userId})).data
            if (result) {
                setContributions(Array.from(result))
            }
        }
    }, [runGetContributionByUser, setContributions, userId])

    const updateContributionContent = React.useCallback(async (id: number | undefined) => {
        if (id) {
            const result = (await runDeleteContribution({id: id})).data
            setContributions([])
        }
    }, [runDeleteContribution, setContributions])

    const deleteContributionById = React.useCallback(async (id: number | undefined) => {
        if (id) {
            await runDeleteContribution({id: id})
            setContributionId(null)
            setUserId(null)
            setContributions([])
        }
    }, [runDeleteContribution, setContributions])
      
    return(
        <>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <TextField
                    margin="normal"
                    type="text"
                    label="Contribution id"
                    value={contributionId}
                    onChange={(e) => {
                        if (e.target.value) {
                            setContributionId(Number(e.target.value))
                        }
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button endIcon={<GetApp fontSize="large" />} onClick={() => getContributionById()} color="primary" variant="contained">
                    Get contribution
                </Button>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <TextField
                    margin="normal"
                    type="text"
                    label="User id"
                    value={userId}
                    onChange={(e) => {
                        if (e.target.value) {
                            setUserId(Number(e.target.value))
                        }
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button endIcon={<GetApp fontSize="large" />} onClick={() => getContributionByUserId()} color="primary" variant="contained">
                    Get contribution by user
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table size="small" sx={{padding: '20px 0'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>User Id</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Body</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contributions.map((item) => (
                            <TableRow>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.userId}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.body}</TableCell>
                                <TableCell>
                                    <Button endIcon={<Create fontSize="small" />} onClick={() => updateContributionContent(item.id)} />
                                    <Button endIcon={<Close fontSize="small" />} onClick={() => deleteContributionById(item.id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}