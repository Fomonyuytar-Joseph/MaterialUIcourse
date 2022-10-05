import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {  DeleteOutlined } from '@material-ui/icons';

function NoteCard({note ,handleDelete}) {
  return (
    <div>
        <Card elevation={3}>
            <CardHeader
            action={
                <IconButton onClick={()=> handleDelete(note.id)} >
                <DeleteOutlined />
              </IconButton>
            }

            title={note.title}
            subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2' color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default NoteCard 