import { Button, ButtonProps, Typography } from '@mui/material';

export function CoreButton({ children, ...props }: ButtonProps) {
  return (
    <Button
      sx={{
        padding: '13px 40px',
        marginTop: '32px',
        borderRadius: '14px',
        boxShadow: 'none',
        textTransform: 'capitalize',
      }}
      {...props}
    >
      <Typography color="white" fontWeight={700} fontSize={20}>
        {children}
      </Typography>
    </Button>
  );
}
