import React, { useState } from 'react';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

interface CaseData {
  caseNumber: string;
  caseType: string;
  priority: string;
}

const CaseForm: React.FC = () => {
  const { t } = useTranslation();
  const [caseData, setCaseData] = useState<CaseData>({
    caseNumber: '',
    caseType: '',
    priority: '',
  });

  // Handler for text fields (e.g. Case Number)
  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCaseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for select fields (Case Type & Priority)
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setCaseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/cases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(caseData),
      });
      if (!response.ok) {
        throw new Error('Network error');
      }
      console.log('Case saved successfully');
      // Optionally, reset the form or show a notification.
    } catch (error) {
      console.error('Error saving case:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}
    >
      <TextField
        label={t('caseNumber')}
        name="caseNumber"
        value={caseData.caseNumber}
        onChange={handleTextFieldChange}
        variant="outlined"
      />

      <FormControl variant="outlined">
        <InputLabel id="caseType-label">{t('caseType')}</InputLabel>
        <Select
          labelId="caseType-label"
          label={t('caseType')}
          name="caseType"
          value={caseData.caseType}
          onChange={handleSelectChange}
        >
          <MenuItem value="">
            <em>{t('selectType')}</em>
          </MenuItem>
          <MenuItem value="type1">Type 1</MenuItem>
          <MenuItem value="type2">Type 2</MenuItem>
          <MenuItem value="type3">Type 3</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel id="priority-label">{t('priority')}</InputLabel>
        <Select
          labelId="priority-label"
          label={t('priority')}
          name="priority"
          value={caseData.priority}
          onChange={handleSelectChange}
        >
          <MenuItem value="">
            <em>{t('selectPriority')}</em>
          </MenuItem>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        {t('save')}
      </Button>
    </Box>
  );
};

export default CaseForm;
