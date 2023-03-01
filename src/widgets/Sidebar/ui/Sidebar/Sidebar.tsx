import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/className';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggleCollapsed = () =>
    setCollapsed((prevState) => !prevState);

  return (
    <div
      className={
        classNames(
          styles.sidebar,
          { [styles.collapsed]: collapsed },
          [className]
        )}
    >
      <div className={styles.menuItems}>
        <button onClick={onToggleCollapsed}>toggle</button>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};