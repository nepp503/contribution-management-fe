import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material'
import React, {useState} from 'react'
import { useAsyncMethod } from '../hooks/useAsyncMethod'
import { updateContribution } from '../api/contributionApi'

type ChangeContributionDialogProps = {
  id: number|null
  open: boolean
  onClose: () => void
}

export const ChangeContributionDialog: React.FC<ChangeContributionDialogProps> = ({id, open, onClose}) => {
  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")

  const {run: runUpdateContribution} = useAsyncMethod(updateContribution)

  const updateContributionContent = React.useCallback(async () => {
    if (id) {
      await runUpdateContribution({updateContributionRequest: {id: id, title: title, body: body}})
    }
    onClose()
}, [runUpdateContribution, onClose, id, title, body])

  const valuesAreInvalid = () => {
    return !title || !body
  }

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>Change contribution</DialogTitle>
        <DialogContent>
          <Stack>
            <TextField
              margin="normal"
              label="Title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              error={valuesAreInvalid()}
              helperText={!valuesAreInvalid() ? '' : 'Value should not be empty'}
            />
            <TextField
              margin="normal"
              label="Body"
              type="text"
              value={body}
              onChange={(e) => {
                setBody(e.target.value)
              }}
              error={valuesAreInvalid()}
              helperText={!valuesAreInvalid() ? '' : 'Value should not be empty'}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={() => updateContributionContent()}
            variant="contained"
            disabled={valuesAreInvalid()}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
