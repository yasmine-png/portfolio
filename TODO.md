# TODO: Fix CV Download Issue

## Tasks
- [x] Rename folder 'certifictaion' to 'certifications' for consistency
- [x] Move CV file from certifictaion/ to public/certifications/ and rename appropriately
- [x] Update Portfolio.tsx to have correct href paths for two CV downloads
- [x] Implement programmatic download function to force download instead of opening in browser
- [ ] Test download functionality on PC and mobile

## Notes
- There are two CV files: one in certifictaion/ and one in public/certifications/
- Current code has two links pointing to the same file in public/certifications/
- Download attribute may not work on all browsers/devices; programmatic download ensures it
